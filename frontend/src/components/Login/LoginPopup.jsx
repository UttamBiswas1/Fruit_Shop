import React, {  useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext.jsx';
import cross_icon from '../../assets/cross_icon.png';
import axios from "axios";
import './style.css'

const LoginPopup = ({setShowLogin}) => {
  const { url,setToken,}=useContext(StoreContext);
  const[currentState,setCurrentState]=useState("Login");
  const [data,setData]=useState({
    name:'',
    email:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin=async(event)=>{
    event.preventDefault();
    let newUrl=url;
    if(currentState==="Login"){
      newUrl+="/user/login";
    }
    else{
      newUrl+="/user/register";
    }
    const response=await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token);
      setShowLogin(false);
    }
    else{
      alert(response.data.message);
    }
  }

  return (
    <div className=' bg-[#00000090] grid w-full h-full absolute z-20 '>
       <form onSubmit={onLogin} action="" className='abcd flex flex-col max-w-md gap-[25px] px-[25px] py-[30px] text-[15px] border-r-4 bg-secondary self-center ml-96'>
        <div className="flex justify-between items-center text-black">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={cross_icon} alt="" className='w-[16px]  cursor-pointer'/>
        </div>
        <div className="flex flex-col gap-[20px] ">
          {currentState==="Login" ?<></>:<input className=' outline-none border-black p-[10px] border-r-[4px] ' name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/> }
          <input className='outline-none border-black p-[10px] border-r-[4px] ' name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
          <input className='outline-none border-black p-[10px] border-r-[4px] ' name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
        </div>
        <button className='border-none p-[10px] border-r-[4px] cursor-pointer text-white bg-primary ' type='submit' >{currentState==="Sign Up"?"Create Account":"Login" }</button>
        <div className="items-start flex mt-[-15px] gap-[8px]">
          <input type="checkbox" required className=' mt-[5px]'/>
          <p className=''>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"?<p >Create a new Account ? <span className='text-primary cursor-pointer font-bold' onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:<p className='ml-[20px]'>Already have an Account ? <span className='text-primary cursor-pointer font-bold' onClick={()=>setCurrentState("Login")}>Login here</span></p>}
       </form>
    </div>
  )
}

export default LoginPopup
