import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import Conversation from '../Conversations/Conversation'
import Message from '../Message/Message'
import axios from 'axios'
import {io} from 'socket.io-client'
import "./messanger.css"
import { IconDiv, IconDivText, Left, LeftNavDiv, LeftNavItem, LeftPanelHeading, LeftSmallHeading } from './MessangerStyles'
import { AiFillHome } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { IoChatbubblesSharp } from 'react-icons/io5'
import { BsGlobe2 } from 'react-icons/bs'
import { TiDocumentText } from 'react-icons/ti'



export default function Messanger() {
    const [conversations,setConversations] = useState([])
    const [currentChat,setCurrentChat] = useState(null)
    const [messages,setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const socket = useRef()
    const {user} = useContext(AuthContext)    
    const [arrivalMessage, setArrivalMessage] = useState(null)
    
    const getConversations = async () =>{
        try{
            const res = await axios.get(`http://localhost:2222/conversations/${user._id}`)
            console.log(res.data)
            setConversations(res.data)

        }catch(err){
            console.log(err)
        }
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const message = {
            conversationId: currentChat._id,
            senderId: user._id,
            text: newMessage,
        }
        const receiverId = currentChat.members.find((m) => m !== user._id)
        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId:receiverId,
            text: newMessage
        })
        try{
            const res = await axios.post("http://localhost:2222/messages", message)
            setMessages([...messages, res.data])
            setNewMessage("")
        }catch(err){
            console.log(err)
        }
    }
    
    const getMessages = async () =>{
        try{
            const res = await axios.get(`http://localhost:2222/messages/${currentChat._id}`)
            setMessages(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        socket.current = io("ws://localhost:2512")
        socket.current.on("getMessage", data =>{
            setArrivalMessage({
                senderId: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    },[])
    useEffect(()=>{
        arrivalMessage && currentChat?.members.includes(arrivalMessage.senderId) && 
        setMessages((prev) => [...prev,arrivalMessage])
    },[arrivalMessage,currentChat])
    useEffect(()=>{
        socket.current.emit("addUser",user._id)
        socket.current.on("getUsers", user =>{
            console.log(user)
        })
    },[user._id])

    useEffect(()=>{
        getConversations()
    },[user._id])

    useEffect(()=>{
        getMessages()
    },[currentChat])
    return (<>

    <div className="mainContainer" >
    <Left>
          <LeftPanelHeading>Home</LeftPanelHeading>
          <LeftSmallHeading>Menu</LeftSmallHeading>
          <LeftNavDiv>
            <LeftNavItem>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Home</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <MdNotifications size="1rem" />
              </IconDiv>
              <IconDivText>Notifications</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <IoChatbubblesSharp size="1rem" />
              </IconDiv>
              <IconDivText>Chats</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <AiFillHome size="1rem" />
              </IconDiv>
              <IconDivText>Groups</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <BsGlobe2 size="1rem" />
              </IconDiv>
              <IconDivText>Explore</IconDivText>
            </LeftNavItem>

            <LeftNavItem>
              <IconDiv>
                <TiDocumentText size="1rem" />
              </IconDiv>
              <IconDivText>News</IconDivText>
            </LeftNavItem>
          </LeftNavDiv>
        </Left>
        <div className="messanger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder="Search for friends" className="chatMenuInp" />
                    </div>
                    <div className="allChat">ALL CHATS</div>
                    <div>

                    {  conversations.map((c) => (
                        <div onClick = {() => setCurrentChat(c)}>
                            <Conversation  currentUser = {user} conversation = {c}/>
                            </div>
                        ))
                    }
                    </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat !== null ? 
                        <>
                        <div className="chatBoxTop">
                            {  messages && 
                                messages.map((m) =>(
                                    <Message message ={m} own = {m.senderId === user._id}/>
                                ))
                            }
                    </div> 
                        <div className="chatBoxBottom">
                            <textarea onChange={(e)=> setNewMessage(e.target.value)} value = {newMessage} placeholder="write here something" id="" cols="30" rows="10" className="chatMessageInput"></textarea>
                            <button onClick={handleSubmit} className="chatSubmitButton">Send</button>
                        </div> 
                        </>
                        :
                        <>
                        <span>open any conversation</span>
                        </>
            }
                </div>
                </div>
                </div>
            {/* <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                </div>
            </div> */}
        </div>
        </>
    )
}
