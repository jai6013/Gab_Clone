import React from 'react'
import "./MenuBox.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import SubjectIcon from '@mui/icons-material/Subject';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GridOnIcon from '@mui/icons-material/GridOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CircleIcon from '@mui/icons-material/Circle';

function MenuBox() {
    return (
        <div className="MenuBox">
            <div className="title">
               Gab.com
            </div>
            <div className="menuLists">
            <h4 style={{color:"#656565"}}>Menu</h4>
            </div>
            <div className="list-items">
            <div className="list-item-child">
              <HomeIcon sx={{ fontSize: 25 }} className="icons-small" />
              <h2>Home</h2>
            </div>
            <div className="list-item-child">
              <SearchIcon sx={{ fontSize: 25 }} className="icons-small"  />
              <h2>Search</h2>
            </div>
            <div className="list-item-child">
              <GroupsIcon sx={{ fontSize: 25 }} className="icons-small"  />
              <h2>Groups</h2>
            </div>
            <div className="list-item-child">
              <SubjectIcon sx={{ fontSize: 25 }}  className="icons-small" />
              <h2>News</h2>
            </div>
            <div className="list-item-child">
              <AssignmentIndIcon sx={{ fontSize: 25 }}  className="icons-small" />
              <h2>About</h2>
            </div>
            
           
            
            </div>
            <div className="menuLists">
            <h4 style={{color:"#656565"}}>Explore</h4>
            </div>
            <div className="list-items">
            <div className="list-item-child">
              <GridOnIcon sx={{ fontSize: 25 }} className="icons-small" />
              <h2>Apps</h2>
            </div>
            <div className="list-item-child">
              <LocalOfferIcon sx={{ fontSize: 25 }} className="icons-small"  />
              <h2>Shop</h2>
            </div>
            <div className="list-item-child">
              <InsertChartIcon sx={{ fontSize: 25 }} className="icons-small"  />
              <h2>Trends</h2>
            </div>
            <div className="list-item-child">
              <SubjectIcon sx={{ fontSize: 25 }}  className="icons-small" />
              <h2>News</h2>
            </div>
            <div className="list-item-child">
              <CircleIcon sx={{ fontSize: 25 }}  className="icons-small" />
              <h2>Dissenter</h2>
            </div>
            
           
            
            </div>
        </div>
    )
}

export default MenuBox
