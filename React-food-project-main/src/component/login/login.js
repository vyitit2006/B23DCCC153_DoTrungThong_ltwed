import React, { useState } from "react";
import '../register/register.css'
import { Link, useHistory } from "react-router-dom";
function Login(){
    const [loginName,setLoginName]=useState('')
    const [loginPassword,setLoginPassword]=useState('')
    const [loginNameErr,setLoginNameErr]=useState(false)
    const [loginPasswordErr,setPasswordErr]=useState(false)
    const [incorrectErr,setincorrectErr]=useState(false)
   //  function showpassword(e){
   //    if(e.type === "password"){
   //       e.type='text'
   //    }
   //    else{
   //       e.type ="password"
   //    }
   //  }
      const history=useHistory()
    function Loginvalidation() { 
         
             if(loginName.trim().length!==0){
                setLoginNameErr(false)
                }
                 else{ 
                setLoginNameErr(true)
                 }
                 if(loginPassword.trim().length!==0){
                    setPasswordErr(false)
                    }
                     else{ 
                        setPasswordErr(true)
                     }
let register= JSON.parse (sessionStorage.getItem('user') )
if((register.name!==loginName)||(register.password!==loginPassword)){
    setincorrectErr(true)
 }
 else{
    setincorrectErr(false)
    history.push('/home') 
 }
    
}
  return(
        <div className="login-body">
        <div className="login-main">
            <h1>Đăng nhập </h1>   
            {incorrectErr&& <small style={{color:'red',textAlign:'center'}}> Tên đăng nhập hoặc mật khẩu không đúng  </small>}   
            <br />
             <p>Người sử dụng</p>
            <input type='text' value={loginName} onChange={(e)=>{setLoginName(e.target.value)}}></input>
             {loginNameErr&& <small  style={{color:'#d3521d'}}>vui lòng nhâp tên </small>}
            <br />
            <p>Mật khẩu </p>
            <input type='password' value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value)}}></input>
             {loginPasswordErr&& <small  style={{color:'#d3521d'}}>Vui lòng nhập mật khẩu  </small>}
            {/* <div>
            <input type="checkbox" onclick={()=>showpassword(loginPassword)} />Show Password
            </div> */}
            <br />
          
            <button onClick={Loginvalidation}>Đăng nhập </button><br />
            <p style={{fontSize:'15px'}}>Chưa có tài khoản? <Link to={'/'}>Đăng ký </Link></p>
        </div>

        </div>
    )
}
export default Login