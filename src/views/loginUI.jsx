import { useRef, useState } from 'react'
import reactLogo from '../assets/KNOWLINK1.svg'
import '../App.css'
import {Link} from 'react-router-dom';
import InputField from '../components/inputbox';
import Axios from 'axios';

export const Login=()=>{
  const aside= useRef();
  const [email,setemail] = useState(0);
  const [password,setpassword] = useState(0);
  const [count,countset] = useState(0)
  const func1 = () => {
    if(count==4){
      countset(0)
    }else{
      countset(count+1)
    }
    aside.current.style.backgroundImage= `url(./src/assets/loginimg/Untitled-${count+1}.png)`;
    console.log(count);
  }
  setTimeout(func1,2500);

  function sendlog(){
    // whatever route you want
    Axios.post('', {
    username: email,
    password: password
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
    
  return (
    <>
      <div className="loginwrapper">
        <div className="container">
          <div className="loginaside" ref={aside}></div>
          <div className="formpannel">
            <form action="" className='loginform'>
              <img src={reactLogo} className='logo' alt="img"/>
              <br />
              <h1>Login to Continue</h1>
              <InputField
                type="email"
                name="mail"
                id="regmail"
                placeholder="Email"
                handlechange={onChangeemail}
              />
              <InputField type="password" name='pass' id='regpass' placeholder='Password' handlechange={onChangepassword}/>
              
              <div className="loginpanel"><p>Don't have an Account?</p> <Link to='/register'>Register</Link></div>
              <input type="submit" value="Login" id='sub' onClick={sendlog} />
              <Link to='/home'><button id='asguset'>Enter as Guest</button></Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

