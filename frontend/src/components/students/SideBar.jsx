import { useState } from "react";
import {
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaFileAlt,
  FaComments,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import "./SideBar.css"


const SideBar = () => {

    const icon_list = [<FaTachometerAlt size={30} />, <FaBook size={30} />, <FaCalendarAlt size={30} />, <IoBookSharp size={30} />, <FaComments size={30} />, <FaClipboardList size={30} />, <FaCog size={30} />, <FaSignOutAlt size={30} />]
    const icon_label = ["DashBoard", "Lessons", "Schedule", "Exams", "Chats", "Assesments", "Settings", "Log Out"]

    return (
        <div className="sidebar-container" id="sidebar">

            <div className="logo-container active">
                <div onClick={(event) => {
                    document.getElementById("labels").classList.toggle("active")
                    if(document.getElementById("labels").classList.contains("active")){
                        document.getElementById("sidebar").style.width = "300px";
                        event.target.innerText = "<";

                    }else{
                        document.getElementById("sidebar").style.width = "80px";
                        event.target.innerText = ">";
                    }
                }}className="toggle-visibility">&gt;</div>
                {icon_list.map((element) => {
                    return <a href="#">{element}</a>
                })}
            </div>
            <div className="text-container" id="labels">
                <div className="logo-text">
                    MindMetrix
                </div>
                {icon_label.map((element) => {
                    return <a href="#">{element}</a>
                })}
            </div>
        </div>
    );
}

export default SideBar