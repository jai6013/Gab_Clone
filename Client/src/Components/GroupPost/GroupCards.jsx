import React from 'react'
import "./GroupCards.scss"
import { JoinBtn } from './GroupCards.styles'
function GroupCards({Title}) {
    return (

        <div className="_cardWrapper">
             <div className="left_around">
               <img src="" alt=""/>
               <div className="titles">
                  <div className="_gpName">{Title}</div>
                  <div className="_membersCount">65.3k members</div>
               </div>
             </div>
             <div className="right_around">
                <JoinBtn>Join group</JoinBtn>
             </div>
        </div>

    )
}

export default GroupCards
