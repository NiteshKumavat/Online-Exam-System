import React from 'react'
import { IoMdMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard-container">
        <div className="container">
            <div className="notice">
                <div className="message">
                    <h2>Hello User</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis molestias quo aut.</p>
                    <a href="#">review it!</a>
                </div>

                <div className="photo">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="calendar-events">
                <div className="calendar-info">
                    <div className="calendar-text">
                        <h2>calendar</h2>
                        <p>6 events today</p>
                    </div>
                    <div className="day-dropdown">
                        <form >
                            <select name="" id=""></select>
                        </form>
                    </div>
                </div>
                <div className="events">

                </div>
            </div>

            <div className="performance-container">
                <div className="text-months">
                    <h2>Performance</h2>
                    <form action="">
                        <select name="months" id="months">

                        </select>
                    </form>
                </div>

                <div className="performance">
                    <h2>The best lessons : </h2>
                    <div className="info-button">
                        <div className="percentage-info">
                            <div className="percentage">
                                95.4
                            </div>
                            <div className="info">
                                Introduction to programming
                            </div>
                        </div>
                        <div className="lessons-button">
                            <button>All lessons</button>
                        </div>
                    </div>
                    <div className="performance-chart">
                        
                    </div>
                </div>
            </div>

            <div className="visits-container">
                <div className="text-box">
                    <h2 className="visit-text">
                        My visit
                    </h2>

                    <form action="">
                        <select name="months" id="months">

                        </select>
                    </form>
                </div>
                
                <div className="pie-charts">

                </div>
            </div>

            <div className="linked-teachers">
                <div className="teacher-text">
                    <h2>
                        Linked Teachers
                    </h2>

                    <a href="#">See all</a>
                </div>

                <div className="teacher-container">
                    <div className="teacher-card">
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="name-profession">
                            <h3>
                                Mary Johnson (Mentor)
                            </h3>
                            <p>
                                Science
                            </p>
                        </div>
                        <div className="contact">
                            <span>
                                <IoMdMail />
                            </span>
                            <span>
                                <BiSolidPhoneCall />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upcoming-events">
                <div className="event-text">
                    <h2>
                        Upcoming events
                    </h2>
                    <a href="#">See all</a>
                </div>
                <div className="event-list">
                    <img src="" alt="" />
                    <div className="event-info">
                        <p className='event-text'>The main event in your life "Robot Fest" will coming soon...</p>
                        <div className="date-info">
                            <div className="dates">
                                <span>
                                    <AiOutlineClockCircle />
                                </span>
                                <span>
                                    14 December 2023
                                </span>
                                <span>
                                    11:00 pm
                                </span>
                            </div>
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard