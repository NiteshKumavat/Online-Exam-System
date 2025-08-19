import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import "./header.css"

function Header() {
  return (
    <div className="header-container">
        <div className="content-container">
            <div className="icons">
                <span className="message">
                    <MdEmail size={30} className="email"/>
                </span>
                <span className="notification">
                    <IoIosNotifications size={30} className="notification-icon"/>
                </span>
            </div>
            <div className="profile">
                <img src="" alt="" />
                <span>Nitesh Kumavat</span>
            </div>
        </div>
    </div>
  )
}

export default Header;
