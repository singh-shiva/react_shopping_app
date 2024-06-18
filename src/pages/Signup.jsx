import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import './Signup.css';
import { useNavigate } from "react-router-dom";
const Signup = (props)=>{
    let setLoggedin = props.setLoggedin;
    const[signupData, setSignupData] = useState({fname:"",lname:"",email:"",pwd:"",con_pwd:""});
    console.log(signupData);
    function onChangeHandler(event){
        const{value,name} = event.target;
        setSignupData(prevData=>{
            return{
                ...prevData,
                [name]:value
            }
        })
    }
    const[onstyle, setOnStyle] = useState("eye-logo");
    const[offstyle, setOffStyle] = useState("eye-off-logo-dis");
    const[showpwd,setShowPwd] = useState(false);
    function toggleShowPwd(){
        setShowPwd(!showpwd);
        if(onstyle === "eye-logo"){
            setOnStyle("eye-logo-dis");
            setOffStyle("eye-off-logo");
        }
        else{
            setOnStyle("eye-logo");
            setOffStyle("eye-off-logo-dis");
        }
    }
    const[showConpwd,setConShowPwd] = useState(false);
    const[onConstyle, setOnConStyle] = useState("eye-logo");
    const[offConstyle, setOffConStyle] = useState("eye-off-logo-dis");
    function toggleConPwd(){
        setConShowPwd(!showConpwd);
        if(onConstyle === "eye-logo"){
            setOnConStyle("eye-logo-dis");
            setOffConStyle("eye-off-logo");
        }
        else{
            setOnConStyle("eye-logo");
            setOffConStyle("eye-off-logo-dis");
        }
    }
    const navigation = useNavigate('');
    function moveToDashboardHandler(){
        navigation('/');
        setLoggedin(true);
    }
    return(
        <div className="signup-container">
            <div className='siginup-text-box'>
                <h2>Join the millions learning to code with StudyNotion for free</h2>
                <p>Build skills for today, tommorow, and beyond.</p>
                <p>Education to future-proof your career.</p>
                <div className='button-container'>
                    <button className="student-btn">Student</button>
                    <button className="instructor-btn">Instructor</button>
                </div>
                <div className='full-name-container'>
                    <div>
                        <label className="fname" htmlFor='fname'>First Name</label>
                        <br/>
                        <input className="fname-input" type='text' id='fname' name='fname' placeholder='Enter first name' required
                        onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <label className="lname" htmlFor='lname'>Last Name</label>
                        <br/>
                        <input className="lname-input" type='text' id='lname' name='lname' placeholder='Enter last name'
                        onChange={onChangeHandler}/>
                    </div>
                </div>
                <div>
                    <label className="email" htmlFor='email'>Email Address</label>
                    <input className="email-input" type='email' id='email' name='email' placeholder='Enter email address'
                    onChange={onChangeHandler}/>
                </div>
                <div className="pwd-container">
                    <div>
                        <label htmlFor='pwd'>Create Password</label>
                        <div className="password-input-container">
                            <input className="password-input" type={showpwd?"text":"password"} id='pwd' name='pwd' placeholder='Enter password'
                            onChange={onChangeHandler}/>
                            <IoEyeOutline className= {onstyle} onClick={toggleShowPwd}/>
                            <IoEyeOffOutline className={offstyle} onClick={toggleShowPwd}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='con_pwd'>Confirm Password</label>
                        <div className="password-input-container">
                            <input className="password-input" type={showConpwd?"text":"password"} id='con_pwd' name='con_pwd' placeholder='Confirm password'
                            onChange={onChangeHandler}/>
                            <IoEyeOutline className={onConstyle} onClick={toggleConPwd}/>
                            <IoEyeOffOutline className={offConstyle} onClick={toggleConPwd}/>
                        </div>
                    </div>
                </div>
                <button className="create-btn" onClick={moveToDashboardHandler}>Create Account</button>
                <div className="google-signin">
                    <FcGoogle/>
                    <span>Sign in with Google</span>
                </div>
            </div>
        </div>
    )
}
export default Signup;