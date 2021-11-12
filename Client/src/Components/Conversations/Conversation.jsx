import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  const friendId = conversation.members.find((m) => m !== currentUser._id);
  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:2222/users/${friendId}`);
      const {username} =  res.data
      setUser(username);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
      getUser();
  },[friendId])
  return (
    <div className="conversation">
      <span>{user}</span>
    </div>
  );
}
