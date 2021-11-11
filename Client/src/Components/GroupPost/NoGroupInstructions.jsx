import "./NoGroupInstructions.scss"
import GroupCards from "./GroupCards";

import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';


export const FeaturedGroupNames=()=>{
    return (
        <div className="_wrapper">
          <p>FEATURED</p>
          <GroupCards Title="FirstGroup"/>
          <GroupCards Title="SecondGroup"/>
        </div>
    )
}

export const NoGroupInstructions=()=>{
    console.log(FeaturedGroupNames);
    return (
        <>
       <InfoTwoToneIcon fontSize="large"/>

        <div style={{marginTop:"5px", fontSize:"14px", marginBottom:"8px"}}>Join some groups then come back here to view your group timeline
        Featured</div>

        
        </>
    )
}

