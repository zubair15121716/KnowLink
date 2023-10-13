import React from "react";
import reactLogo from '../assets/KnowLINK1.svg'
import "../App.css"

function Profileinfo({classname,img,name,des,email,loc,link}){
  return (
        <div className={`${classname}`}>   
        <div className="profile-header">
            <img className="profile-image" style={{objectFit:'contain'}} src={reactLogo} alt="Profile Image"/>
            <h1 className="profile-name">John Doe</h1>
            <p className="profile-description">Frontend Developer</p>
        </div>
        <div className="profile-details">
                <div className="profile-details-row">
                    <span className="profile-details-label">Email:</span>
                    <span className="profile-details-value">johndoe@example.com</span>
                </div>
                <div className="profile-details-row">
                    <span className="profile-details-label">Location:</span>
                    <span className="profile-details-value">New York, USA</span>
                </div>
                <div className="profile-details-row">
                    <span className="profile-details-label">Website:</span>
                    <span className="profile-details-value">
                    <a href="https://www.example.com">www.example.com</a>
                    </span>
                </div>
    </div>
    </div>
  );
};

export default Profileinfo;




