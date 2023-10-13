import React from "react";

function Footer(){
  return (
            <div className='homefooter '>
            <div className="footercol ">
            <div  className="tags row">
                        <h3 style={{color:'white',marginTop:'20px'}}>Categories</h3>
                        <hr style={{width:110,marginBottom:'20px'}} />
                                <a href=""><img  width={150} height={80} src="../src/assets/loginimages/Untitled-1.png" alt="" /></a>
                                <a href=""><img width={80} height={60} src="../src/assets/loginimages/Untitled-2.png" alt="" /></a>
                                <a href=""><img width={150} height={80} src="../src/assets/loginimages/Untitled-3.png" alt=""/></a>
                                <a href=""><img width={150} height={80} src="../src/assets/loginimages/Untitled-4.png" alt=""/></a>
                    </div>
                    <div  className="tags row">
                        <h3 style={{color:'white',marginTop:'20px'}}></h3>
                        <hr style={{width:50,marginBottom:'20px'}} />
                        <a href=""><img  width={150} height={80} src="../src/assets/loginimages/Untitled-7.png" alt="" /></a>
                                <a href=""><img width={80} height={60} src="../src/assets/loginimages/Untitled-5.png" alt="" /></a>
                                <a href=""><img width={150} height={80} src="../src/assets/loginimages/Untitled-6.png" alt=""/></a>
                                <a href=""><img width={150} height={80} src="../src/assets/loginimages/Untitled-8.png" alt=""/></a>
                    </div>
            <div className="aboutus" id='about'>
                <h3 style={{color:'white',marginTop:'20px'}}>About US</h3>
                <hr style={{width:150,marginBottom:'20px'}} />
                <p style={{color:'white'}}>Knowlink is a dynamic and innovative blogging site that aims to provide users with a platform to share knowledge, insights, and ideas. Our mission is to connect individuals from different backgrounds and fields of expertise, facilitating a diverse and engaging community.</p>
            </div>
            </div>
        <p style={{textAlign:'center',color:'#f2f2f2'}}>Copyright © 2023 All rights reserved.</p> 
        </div>
  );
};

export default Footer;

