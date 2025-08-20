import React from 'react'
import "./Exam.css"

function Exam() {
  return (
    <div className="exam-container">
        <div className="exams">
            <div className="upcoming-exams">
                <h2>Upcoming Exams</h2>
                <div className="upcoming-card">
                    <h3>Math Quiz - Chapter 5</h3>
                    <p><strong>Subject : </strong> Math</p>
                    <p><strong>Exam Type : </strong>MCQ</p>
                    <p><strong>Date:</strong> 22 Aug, 10:00 AM</p>
                    <p><strong>Duration:</strong> 60 mins</p>
                    <p className="status scheduled">Status: Scheduled</p>
                    <button className="btn reminder">Set Reminder</button>
                </div>
            </div>

            <div className="ongoing-exams">
                <h2>
                    Ongoing Exams
                </h2>
                <div className="ongoing-card">
                    <h3>English Literature Test</h3>
                    <p><strong>Subject:</strong> English</p>
                    <p className="status live">Status: Live (Ends at 12:00 PM)</p>
                    <button className="btn start">Start Exam</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exam