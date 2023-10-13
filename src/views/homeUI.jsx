import '../App.css'
import CustomCard from '../components/card';
import logo from '../assets/KNOWLINK2.svg';
import CustomDialog from '../components/search';
import reactLogo from '../assets/KnowLINK1.svg'
import LinearProgress from '@mui/material/LinearProgress';
import CustomMenu from '../components/dropdown';
import {data} from '../assets/data';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountMenu from '../components/accountmenu';

console.log(data[0].title);
export const Home=()=>{
    const categoriesList = ["Tech","Sports","Fashion","Beauty","Automotive","Health","Food","Tech Bytes",];
    const [selectedcat,setselectedcat]= useState(null);
    const [postres,setpostres] = useState('');
    const [topv,settopvres] = useState('');
    const [toprate,settopr] = useState('');
    const[selectedpost,setselection] = useState('');
    useEffect(() => {
        // Axios.get('http://localhost:5440/toprated').then((response) => { settopr(response.data); });
        // Axios.get('http://localhost:5440/topviewd').then((response) => { settopvres(response.data); });
        // Axios.get('http://localhost:5440/postsforhome').then((response) => { setpostres(response.data); });
     }, []);
    function gotoroute(){
        const linkage = `http://localhost:5173/post/${selectedcat}`;
        window.location.href = linkage;
    }

    

    return (
        <>
                <header className='homehead'>
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
                                <AccountMenu/>
                            </div>
                    </div>
                    <LinearProgress color="inherit"/>
                    <hr style={{backgroundColor:'#4040409c',height:'1px',border:'none'}}/>
                    <div className='menu'>
                        <a href="" className='menuitems'><h3>HOME</h3></a>
                        <Link to="/blogs" className="menuitems dropdown"><h3>BLOGS</h3></Link>
                        <CustomMenu buttonText='Categories' menuItems={categoriesList} handleselection={setselectedcat}/>
                        {selectedcat && gotoroute()}
                        <Link to="/write" className='menuitems'><h3>POST</h3></Link>
                        <a href="#about" className='menuitems'><h3>ABOUT</h3></a>                        
                    </div>
                    <div className="topcards" style={{marginTop:'2vw'}}>
                        <CustomCard image={reactLogo} alt="green iguana" title="Lizard" category='Technology' fillcolor='#8ac5d6' catFColor='#fff'
                            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                            cardcolor='#000000'/>
                        <CustomCard image={reactLogo} alt="green iguana" title="Lizard" category='Technology' fillcolor='#8ac5d6' catFColor='#fff'
                            description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                            cardcolor='#000000'/>
                    </div>        
                </header>
                <div className="showposts row">
                {data.map((params)=>(
                        <CustomCard image={reactLogo} alt="green iguana" title={params.content} category={params.title} fillcolor='#8ac5d6' catFColor='#000000'
                        description={params.description} key={params.id} id={params.id} handleclick={setselection}
                        cardcolor='#fff'/>
                    ))}
                
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
                        <h3 style={{color:'white',marginTop:'20px'}}>Tags</h3>
                        <hr style={{width:50,marginBottom:'20px'}} />
                    <a href=""><img style={{backgroundColor:'white'}} width={40} height={40} src="https://img.icons8.com/?size=512&id=118467&format=png" alt="" /></a>
                                <a href=""><img width={40} height={40} style={{backgroundColor:'white'}} src="https://img.icons8.com/?size=512&id=32292&format=png" alt="" /></a>
                                <a href=""><img width="40" height="40" style={{backgroundColor:'white'}} src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter--v1"/></a>
                                <a href=""><img width={40} height={40} style={{backgroundColor:'white'}} src="https://img.icons8.com/?size=512&id=447&format=png" alt="" /></a>
                                <a href=""><img width={40} height={40} style={{backgroundColor:'white'}} src='https://img.icons8.com/?size=512&id=62852&format=png' alt="" /></a>
                    </div>
                    <div className="aboutus" id='about'>
                        <h3 style={{color:'white',marginTop:'20px'}}>About US</h3>
                        <hr style={{width:150,marginBottom:'20px'}} />
                        <p style={{color:'white'}}>Knowlink is a dynamic and innovative blogging site that aims to provide users with a platform to share knowledge, insights, and ideas. Our mission is to connect individuals from different backgrounds and fields of expertise, facilitating a diverse and engaging community.</p>
                    </div>
                    </div>
                <p style={{textAlign:'center',color:'#f2f2f2'}}>Copyright © 2023 All rights reserved.</p> 
                </div>
        </>
      );
}

