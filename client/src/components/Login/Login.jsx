import React, { useState } from 'react';
import './login.css';
import userIcon from '../../assets/person.png';
import emailIcon from '../../assets/email.png';
import passwordIcon from '../../assets/password.png';
import { BsFillTelephoneFill } from "react-icons/bs";

const Login = () => {
    const [action, setAction] = useState("Login");

    return (
        <div className="Container">
            <div className="submitContainer">
                <div className={action === "Login" ? "submit" : "submit white"} onClick={() => { setAction("Login") }}>Log in</div>
                <div className={action === "Login" ? "submit white" : "submit"} onClick={() => { setAction("Sign up") }}>Sign up</div>
            </div>
            <div className="Header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="Inputs">
                {action === "Login" ? <div></div> :
                    <div className="Input">
                        <img src={userIcon} alt="" />
                        <input className='input' type="text" placeholder='Username' pattern='^[a-z0-9_-+' />
                    </div>}

                <div className="Input">
                    <img src={emailIcon} alt="" />
                    <input className='input' type="email" placeholder='Email' pattern='[^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$]' />
                </div>

                <div className="Input">
                    <img src={passwordIcon} alt="" />
                    <input className='input' type="password" placeholder='Password' />
                </div>

                {action === "Login" ? <div></div> :
                    <div className="Input">
                        <div className='phone'><BsFillTelephoneFill /></div>
                        <input className='input' type="text" placeholder='Phone' pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$' />
                    </div>}
            </div>

            {action === "Login" ? (
                <button className="BottomButton">Login</button>
            ) : (
                <button className="BottomButton">Sign up</button>
            )}
        </div>
    );
}

export default Login;
