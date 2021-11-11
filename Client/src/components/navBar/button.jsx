import React from 'react'
import "./button.css"
function Button(text) {
    return (
        <div>
            <button className="join_buttons">Log in</button>
            <button className="join_buttons">Sign up</button>
        </div>
    )
}

export default Button
