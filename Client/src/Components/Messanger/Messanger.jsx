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

export default function Messanger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const pic = useRef("");
  const fUser = useRef("");
  const [searchConversation, setSearchConversation] = useState("");
  const getConversations = async () => {
    try {
      const res = await axios.get(
        `https://secure-ravine-45527.herokuapp.com/conversations/${user._id}`
      );
      console.log(res.data);
      setConversations(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSetPic = async (c) => {
    const friendId = c.members.find((m) => m !== user._id);
    try {
      const res = await axios.get(
        `https://secure-ravine-45527.herokuapp.com/conversations/${friendId}`
      );
      const { username, profile_pic } = res.data;
      pic.current = profile_pic;
      fUser.current = username;
    } catch (err) {
      console.log(err);
    }
    setCurrentChat(c);
  };
  const handleNewConversation = () => {};
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
      const res = await axios.post(
        "https://secure-ravine-45527.herokuapp.com/conversations/messages",
        message
      );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  const getMessages = async () => {
    try {
      const res = await axios.get(
        `https://secure-ravine-45527.herokuapp.com/conversations/${currentChat._id}`
      );
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
                      onClick={handleNewConversation}
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
