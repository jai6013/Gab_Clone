import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Messanger/messanger.css'

export default function Conversation({changeHoverColor, conversation, currentUser}) {
  const [user, setUser] = useState(null);
  const [pic,setPic] = useState(null)
  const friendId = conversation.members.find((m) => m !== currentUser._id);
  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:2222/users/${friendId}`);
      const {username, profile_pic} =  res.data
            
      setUser(username);
      setPic(profile_pic)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
      getUser();
  },[friendId])
  return (
    <div className="conversation">
      <div className={changeHoverColor ? "imgUserChange" : "imgUser"}>
      {
        pic !== "" ? <img src={pic} alt="" /> : <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no" />
      }
      <span>{user}</span>
      </div>
    </div>
  );
}
