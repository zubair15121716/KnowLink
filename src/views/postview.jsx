import '../App.css'
import Footer from '../components/footer';
import logo from '../assets/KNOWLINK2.svg';
import CustomDialog from '../components/search';
import reactLogo from '../assets/KnowLINK1.svg'
import LinearProgress from '@mui/material/LinearProgress';
import CustomMenu from '../components/dropdown';
import {data} from '../assets/data';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Profileinfo from '../components/profileinfo';
import Ratingstars from '../components/rating';
import AccountMenu from '../components/accountmenu';


export const Postview=()=>{
    const {postid} = useParams();
    const categoriesList = ["Tech","Sports","Fashion","Beauty","Automotive","Health","Food","Tech Bytes",];
    const [selectedcat,setselectedcat]= useState(0);
    const [postres,setpostres] = useState('');
    const [topv,settopvres] = useState('');
    const [toprate,settopr] = useState('');
    const [like,setlikes] = useState(100);
    const[selectedpost,setselection] = useState('');
    // useEffect(() => {
    //     // Axios.get('http://localhost:5440/').then((response) => { setpostres(response.data); });
    //  }, []);
    function gotoroute(){
        const linkage = `http://localhost:5173/post/${selectedcat}`;
        window.location.href = linkage;
    }

    useEffect(()=>{
        console.log(selectedpost)
    },[selectedpost])

    function liked(e){
        // if(e.target.value+1==likes){

        // }
        e.target.innerText='Liked';
        console.log(e.target.innerText);
        setlikes(like+1);
        e.target.style.color='black';
        e.target.style.backgroundColor='#F2F2F2';
    }
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
                                <AccountMenu/>
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
                        <p style={{fontSize:"94px",color:'white',fontFamily:'A4 SPEED'}}>{data[0].title}</p>
                    </div>        
                </header>
                <div className="postview">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data[0].post) }} />;
                    <hr />
                    <div className="post-details-row">
                        <h2 className="post-details-label">Written By: John Dom</h2>
                        <div className="like">
                            <button className="like-button" style={{backgroundColor:'#1767e8',color:'white'}} onClick={liked}>Like Post</button>
                            <span className="post-details-value" >{like}</span>
                            <Ratingstars/>
                        </div>
                    </div>
                    
                </div>    
                <Profileinfo classname='profilepost'/>            
                <Footer></Footer>
            </div>
        </>
      );
}

