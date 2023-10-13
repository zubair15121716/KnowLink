import { useRef, useState } from 'react'
import reactLogo from '../assets/KNOWLINK1.svg'
import '../App.css'
import {Link} from 'react-router-dom';
import InputField from '../components/inputbox';
import Axios from 'axios';
import AccountMenu from '../components/accountmenu';

export const Register=()=>{
  const aside= useRef();
  const [email,setemail] = useState(0);
  const [password,setpassword] = useState(0);
  const [name,setname] = useState(0);
  const [count,countset] = useState(0);
  const [auth,setauth] =useState(0);
  const func1 = () => {
    if(count==2){
      countset(0)
    }else{
      countset(count+1)
    }
    aside.current.style.backgroundImage= `url(./src/assets/loginimg/Untitled-${count+1}.png)`;
    console.log(count);
  }
  setTimeout(func1,3000);

  function sendreg(){
    // whatever route you want
    Axios.post('http://localhost:5440/login', {
    username: email,
    password: password,
    name: name
  })
   .then(function (response) {
      console.log(response);
  })
   .catch(function (error) {
      console.log(error);
  });}

  function onChangepassword(e){
    setpassword(e.target.value);
  }

  function onChangeemail(e){
    setemail(e.target.value);
  }
  function onChangename(e){
    setname(e.target.value);
  }

  function changedropcat(e){
    setauth(e.target.value);
  }
    
    
  return (
    <>
      <div className="loginwrapper">
        <div className="container">
          <div className="loginaside" ref={aside}></div>
          <div className="formpannel">
            <form action="" className='loginform'>
              <img src={reactLogo} className='logo' alt="img"/>
              <br />
              <h1>Register Your Account</h1>
              <InputField type="text" name='name' id='regname' placeholder='Name' handlechange={onChangename}/>
              <InputField
                type="email"
                name="mail"
                id="regmail"
                placeholder="Email"
                handlechange={onChangeemail}
              />
              <InputField type="password" name='pass' id='regpass' placeholder='Password' handlechange={onChangepassword}/>
              <select style={{marginLeft:'20px'}} name="categories" id="plan" onChange={changedropcat}>
                        <option value={true} selected>Author</option>
                        <option value={false} >User</option>
                    </select>
              <input type="submit" value="Register" id='regsub' onClick={sendreg} />
              <Link to='/home'><button id='asguset'>Enter as Guest</button></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

