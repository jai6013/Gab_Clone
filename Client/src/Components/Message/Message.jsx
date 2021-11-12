import React from 'react'
import './message.css'
import {format} from 'timeago.js'

export default function Message({message,own, senderPic, recieverPic}) {
    return (
        <div className={own ? "message own": "message"}>
            <div className={own ? "messageTop2" : "messageTop"} >
                <img className="messageImage" src={own ? senderPic? senderPic: "https://cdn-icons-png.flaticon.com/512/149/149071.png" : recieverPic? recieverPic : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="nothing" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
