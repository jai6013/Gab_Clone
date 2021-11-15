import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Conversation from "../Conversations/Conversation";
import Message from "../Message/Message";
import axios from "axios";
import { io } from "socket.io-client";
import "./messanger.css";
import {
  IconDiv,
  IconDivText,
  Left,
  LeftNavDiv,
  LeftNavItem,
  LeftPanelHeading,
  LeftSmallHeading,
} from "./MessangerStyles";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import styled from "styled-components";

export default function Messanger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef();
  const {user} = useContext(AuthContext);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const pic = useRef("");
  const fUser = useRef("");
  const [searchConversation, setSearchConversation] = useState("");
  const [hide, setHide] = useState(true);
  const [searchedUser, setSearchedUser] = useState([]);
  const [addedConvRes, setAddedConvRes] = useState([])
  const myFriend = useRef(null)

  const handleFollowingSearch = (item) => {
    console.log("w",user.following)
    const followingData = user.following;
    for (var i = 0; i < followingData.length; i++) {
      if (followingData[i].username === item) {
        console.log(item)
        setSearchedUser([...searchedUser, followingData[i]])
        console.log(searchedUser)
      }
    }
  };
 
   const handleAddUsersConversation = (m) =>{
    setAddedConvRes([...addedConvRes,m])
  }
  const handleAddConv = async()=>{
    setHide(true)
    for(var i = 0; i<addedConvRes?.length; i++){
      console.log(addedConvRes[i]._id)
      let newConv = {
        senderId:user._id,
        receiverId:addedConvRes[i]._id
      }
      const res = await axios.post("http://localhost:2222/conversations", newConv)
      setConversations([...conversations,res.data])
    }
  }
  const getConversations = async () => {
    try {
      const res = await axios.get(
        `http://localhost:2222/conversations/${user._id}`
      );
      console.log(res.data);
      setConversations(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSetPic = async (c) => {
    const friendId = c.members.find((m) => m !== user._id);
    myFriend.current = friendId;
    try {
      const res = await axios.get(`http://localhost:2222/users/${friendId}`);
      const { username, profile_pic } = res.data;
      pic.current = profile_pic;
      fUser.current = username;
    } catch (err) {
      console.log(err);
    }
    setCurrentChat(c);
  };
  // const handleNewConversation = () => {};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      senderId: user._id,
      text: newMessage,
    };
    const receiverId = currentChat.members.find((m) => m !== user._id);
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage,
    });
    try {
      const res = await axios.post("http://localhost:2222/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  // const getNotify = async() =>{
  //   await axios.patch("http://localhost:2222/users/notify", {type:"message", fId: myFriend.current},{headers:{Authorization: "Bearer " + token}})
  //   .then((res) => console.log(res))
  //   .catch((err)=> console.log(err))
  // }

  const getMessages = async () => {
    try {
      const res = await axios.get(
        `http://localhost:2222/messages/${currentChat._id}`
      );
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const Modal = styled.div`
    visibility: ${hide ? "hidden" : "visible"};
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2000;
    background-color: rgba(128, 128, 128, 0.555);
  `;

  useEffect(() => {
    socket.current = io("ws://localhost:2512");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.senderId) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);
  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (user) => {
      console.log(user);
    });
  }, [user._id]);

  useEffect(() => {
    getConversations();
  }, [user._id]);

  useEffect(() => {
    getMessages();
  }, [currentChat]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Modal>
        <div className="modalBox">
          <div className="modalTopTop">
            <div className="modalTop">New Message</div>
            <img
              onClick={() => setHide(!hide)}
              src="https://cdn-icons-png.flaticon.com/512/748/748122.png"
              alt=""
              className="crossButton"
            />
          </div>
          <div className="overFlow">
            <div className="inputBoxSearch">
              <input
                type="text"
                placeholder="Search for a User"
                className="modalInput"
                onChange={(e) => handleFollowingSearch(e.target.value)}
              />
            </div>
            {searchedUser && searchedUser.map((m) =>
              <>
                <div className="modalSearchedResults">

                <div className="imgUserAndIcon">
                  {m.profile_pic !== "" ? (
                    <img src={m.profile_pic} alt="" />
                    ) : (
                      <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt="no"
                      />
                    )}
                  <span>{m.username}</span>
                </div>
                <img onClick={()=> handleAddUsersConversation(m)} src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1636791254~hmac=154dfc953d7cb0917721557491c35bf5" alt="no" className="addIcon" />
                </div>
              </>
                    )   
              }
            <button className="modalButton" onClick={handleAddConv} >Next</button>
          </div>
        </div>
      </Modal>
      <div className="mainContainer">
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
              <input
                value={searchConversation}
                onChange={(e) => setSearchConversation(e.target.value)}
                type="text"
                placeholder="Search for friends"
                className="chatMenuInp"
              />
            </div>
            <div className="allChat">
              {searchConversation.length ? "SEARCH CHATS" : "ALL CHATS"}
            </div>
            <div className="conversationContainer">
              {conversations.map((c) => (
                <div onClick={() => handleSetPic(c)}>
                  <Conversation currentUser={user} conversation={c} />
                </div>
              ))}
            </div>
          </div>
          <div className="chatBox">
            <div className="cUTop">
              {pic.current !== "" ? <img src={pic.current} alt="" /> : null}
              <span>{fUser.current}</span>
            </div>
            <div className="chatBoxWrapper">
              {currentChat !== null ? (
                <>
                  <div className="chatBoxTop">
                    {messages &&
                      messages.map((m) => (
                        <div ref={scrollRef}>
                          <Message
                            senderPic={user.profile_pic}
                            recieverPic={pic.current}
                            message={m}
                            own={m.senderId === user._id ? true : false}
                          />
                        </div>
                      ))}
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                      placeholder="Type a new message"
                      id=""
                      cols="30"
                      rows="10"
                      className="chatMessageInput"
                    ></textarea>
                    <button onClick={handleSubmit} className="chatSubmitButton">
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="headingPara">
                    <h3>You don’t have a message selected</h3>
                    <br />
                    <p>
                      Choose one from your existing messages, or start a new
                      one"
                    </p>
                    <br />
                    <button
                      onClick={() => setHide(!hide)}
                      className="chatSubmitButton"
                      style={{ width: "130px" }}
                    >
                      New message
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
