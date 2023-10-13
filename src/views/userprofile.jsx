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
import Profileinfo from '../components/profileinfo';

console.log(data[0].title);
export const Profile=()=>{
    const categoriesList = ["Tech","Sports","Fashion","Beauty","Automotive","Health","Food","Tech Bytes",];
    const [selectedcat,setselectedcat]= useState(null);
    const [postres,setpostres] = useState('');
    const [topv,settopvres] = useState('');
    const [toprate,settopr] = useState('');
    const[selectedpost,setselection] = useState('');
    // useEffect(() => {
    //     // Axios.get('http://localhost:5440/toprated').then((response) => { settopr(response.data); });
    //     // Axios.get('http://localhost:5440/topviewd').then((response) => { settopvres(response.data); });
    //     // Axios.get('http://localhost:5440/postsforhome').then((response) => { setpostres(response.data); });
    //  }, []);
    function gotoroute(){
        const linkage = `http://localhost:5173/post/${selectedcat}`;
        window.location.href = linkage;
    }

    return (
        <>
            <div className="homewrapper">
            <header className='homeheadpost1'>
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
                    <div className='menu' style={{marginBottom:"8vh"}}>
                        <Link to='/home' className='menuitems'><h3>HOME</h3></Link>
                        <Link to="/blogs" className="menuitems dropdown"><h3>BLOGS</h3></Link>
                        <CustomMenu buttonText='Categories' menuItems={categoriesList} handleselection={setselectedcat}/>
                        {selectedcat && gotoroute()}
                        <Link to="/write" className='menuitems'><h3>POST</h3></Link>
                        <a href="#about" className='menuitems'><h3>ABOUT</h3></a>                        
                    </div>                       
                </header>
                <div className='row'>
                    <Profileinfo classname='profile row'/>
                </div>   
        </div>             
        </>
      );
}

