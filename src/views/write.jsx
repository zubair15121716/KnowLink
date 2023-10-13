import '../App.css'
import CustomCard from '../components/card';
import logo from '../assets/KNOWLINK2.svg';
import CustomDialog from '../components/search';
import reactLogo from '../assets/KnowLINK1.svg'
import LinearProgress from '@mui/material/LinearProgress';
import CustomMenu from '../components/dropdown';
import {data} from '../assets/data';
import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/inputbox';
import Editorquill from '../components/Editorform';
import AccountMenu from '../components/accountmenu';


export const Write=()=>{
    const {postcat} = useParams();
    const [imageSrc, setImageSrc] = useState('');
    const categoriesList = ["Tech","Sports","Fashion","Beauty","Automotive","Health","Food","Tech Bytes",];
    const [selectedcat,setselectedcat]= useState(null);
    const [email,setemail]= useState('');
    const [title,settitle]= useState('');
    const [catpost,setcatpost]= useState('');
    const [des,setdes]= useState('');
    const [post,setpost]= useState('');
    const [coverimg,setcover]= useState('');
    function gotoroute(){
        const linkage = `http://localhost:5173/post/${selectedcat}`;
        window.location.href = linkage;
    }

    function changedropcat(e){
        setcatpost(e.target.value)
    }

    function onChangetitle(e){
        settitle(e.target.value);
    }

    function onChangedes(e){
        setdes(e.target.value);
    }
    
      function onChangeemail(e){
        setemail(e.target.value);
    }

    function handleImageUpload(e){
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
          const img = reader.result;
          setImageSrc(img);
        };
        
        reader.readAsDataURL(file);
      };
    
      useEffect(()=>console.log(imageSrc),[imageSrc])

    function sendpost(){
        Axios.post('http://localhost:5000/homepage/Post?title=abc&email=emily.hill41@gmail&content=jsx&desc=9789&catTitle=Techy', {
        email: email,
        title: title,
        post: post,
        cat:catpost,

      })
       .then(function (response) {
          console.log(response);
      })
       .catch(function (error) {
          console.log(error);
      });}

    useEffect(()=>{
        console.log(post)
    },[post])

    return (
        <>
            <div className="homewrapper">
                <header className='homeheadpost'>
                    <div className='homehead-row'>
                            <div className="head-links" style={{marginTop:'2vw'}}>
                                <a href=""><img style={{backgroundColor:'white'}} width={40} height={40} src="https://img.icons8.com/?size=512&id=118467&format=png" alt="" /></a>
                                <a href=""><img width={40} height={40} style={{backgroundColor:'white'}} src="https://img.icons8.com/?size=512&id=32292&format=png" alt="" /></a>
                                <a href=""><img width="40" height="40" style={{backgroundColor:'white'}} src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter--v1"/></a>
                                <a href=""><img width={40} height={40} style={{backgroundColor:'white'}} src="https://img.icons8.com/?size=512&id=447&format=png" alt="" /></a>
                                <a href=""><img width={40} height={40} style={{backgroundColor:'white'}} src='https://img.icons8.com/?size=512&id=62852&format=png' alt="" /></a>
                            </div>
                            <div className="logo">
                                <img src={logo} alt="logo" className='logo'/>
                            </div>
                            <div className="header-search" style={{marginTop:'2vw'}}>
                                <CustomDialog buttonText='Search' dialogContent='Please Enter Text to Begin Search' dialogTitle='Search For'/>
                                <AccountMenu image={reactLogo}/>
                            </div>
                    </div>
                    <LinearProgress color="inherit"/>
                    <hr style={{backgroundColor:'#4040409c',height:'1px',border:'none'}}/>
                    <div className='menu'>
                        <Link to='/home' className='menuitems'><h3>HOME</h3></Link>
                        <Link to="/blogs" className="menuitems dropdown"><h3>BLOGS</h3></Link>
                        <CustomMenu buttonText='Categories' menuItems={categoriesList} handleselection={setselectedcat}/>
                        {selectedcat && gotoroute()}
                        <Link to="/write" className='menuitems'><h3>POST</h3></Link>
                        <a href="#about" className='menuitems'><h3>ABOUT</h3></a>                         
                    </div>
                    <div className="topcards" style={{marginTop:'2vw'}}>
                        <p style={{fontSize:"94px",color:'white',fontFamily:'A4 SPEED'}}>Write a Blog</p>
                    </div>        
                </header>
                <div className="showpost row">
                    <label htmlFor="title"><h3>Title Of Blog</h3></label>
                    <InputField type="text" name="title" id="title" placeholder="Title" require={1} handlechange={onChangetitle}/> 
                    <label htmlFor="email"><h3>Email</h3></label>
                    <InputField type="email" name="email" id="email" placeholder="Email" require={1} handlechange={onChangeemail}/> 
                    <label htmlFor="des"><h3>Description</h3></label>
                    <InputField type="text" name="des" id="des" placeholder="Description" handlechange={onChangedes}/>
                    <label htmlFor="plan"><h3>Post Category</h3></label>
                    <select name="categories" id="plan" onChange={changedropcat}>
                        <option value="Tech" selected>Technology</option>
                        <option value="Sports" >Sports </option>
                        <option value="Fashion">Fashion</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Health">Health</option>
                        <option value="Food">Food</option>
                        <option value="Tech Bytes">Tech Bytes</option>
                    </select>
                    <hr style={{marginTop:'10px',marginBottom:'10px'}}/>
                    <h1>Upload Cover Image</h1>
                    <input type="file" onChange={handleImageUpload} />
                    <Editorquill handlechange={setpost} text={'Write Your Blog'}/>
                    <button id='SubmissionBlog'>Submit</button>           
                </div>                
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
                <p style={{textAlign:'center',color:'#f2f2f2'}}>{`Copyright ©${new Date()} All rights reserved.`}</p> 
                </div>
            </div>
        </>
      );
}

