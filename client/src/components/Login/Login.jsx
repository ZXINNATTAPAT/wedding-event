import { useState } from 'react';
import './login.css';
import userIcon from '../../assets/person.png';
import emailIcon from '../../assets/email.png';
import passwordIcon from '../../assets/password.png';
import { BsFillTelephoneFill } from "react-icons/bs";

const Login = () => {
    const [action, setAction] = useState("Login");
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            Username: data.get('Username'),
            password: data.get('password')
        }
        fetch('http://localhost:5000/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => response.json())
            .then(data => {
                //console.error('success:', data);
                if (data.status == 'ok') {
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('Username', jsonData.Username)
                    window.location = '/Home';
                    alert('login successfully')
                } else {
                    alert('login failed')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
    };

    // const HandleLogin = () => {
    //     window.location = '/Home';
    // }


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
                        <input className='input' id='Username' type="text" placeholder='Username' pattern='^[a-z0-9_-+' />
                    </div>}

                <div className="Input">
                    <img src={emailIcon} alt="" />
                    <input className='input' id='email' type="email" placeholder='Email' pattern='[^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$]' />
                </div>

                <div className="Input">
                    <img src={passwordIcon} alt="" />
                    <input className='input' id='password' type="password" placeholder='Password' />
                </div>

                {action === "Login" ? <div></div> :
                    <div className="Input">
                        <div className='phone'><BsFillTelephoneFill /></div>
                        <input className='input' type="text" placeholder='Phone' pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$' />
                    </div>}
            </div>

            {action === "Login" ? (
                <button className="BottomButton" onClick={handleSubmit}>Login</button>
            ) : (
                <button className="BottomButton">Sign up</button>
            )}
        </div>
    );
}

export default Login;
