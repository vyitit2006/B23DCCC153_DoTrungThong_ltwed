import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "../register/register.css"
function Register(){
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const [nameErr,setnameErr]=useState(false)
    const history=useHistory()
    function registertration(){
        if((username.trim().length===0)||(password.trim().length===0)||(email.trim().length===0)){
                setnameErr(true)
        }
        else if(!email.includes('@','.','com')){
            alert('vui lòng nhập địa chỉ email hợp lệ')
        }
        else if(password.length<5){
            alert('Vui lòng nhập mật khẩu nhiều hơn năm ký tự')
        }
        else{
            setnameErr(false)
            const array =[{username:username,email:email,password:password}]
            console.log(array)
            sessionStorage.setItem('user',JSON.stringify({'name':username,'email':email,'password':password}))
            history.push('/login')
        }
    }
    return(
        <div className="register-body">
        <div className="register-main">
            <h1>form đăng ký </h1>
            {nameErr&& <p className="errP">*Vui lòng điền đầy đủ thông tin *</p>}
            <br />
            <p>Tên</p>
            <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <br />
            <p>Email</p>
            <input type='text'value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <br />
            <p>Mật khẩu </p>
            <input type='password'value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
            <br /><br />
            <button onClick={registertration}>Đăng ký</button>
        </div>
        </div>
    )
}
export default Register