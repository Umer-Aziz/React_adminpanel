import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Avatar } from '@material-ui/core';
const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone/>
                     <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Language/>
                     <span className="topIconBag">1</span>
                    </div>
                    <div className="topbarIconContainer">
                    <Settings/>
                    </div>
                    <Avatar id="avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQFiU2yvc-NDWA/profile-displayphoto-shrink_100_100/0/1616837029697?e=1635379200&v=beta&t=Qppy0S2cSaq6yfYriDADEwBL94RfFZWlPfJZmwHOcqM"/>
                </div>
            </div>
        </div>
    )
}

export default Topbar
