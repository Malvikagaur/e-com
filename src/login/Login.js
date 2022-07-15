import React,{useState} from "react";
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = () => {
        if(email && password)
        {
            window.location.href="/Product";
        }
        else
        {
            window.location.href="/Login";
        }
    }
  return (
    <div className="formContainer">
        <h1>Login</h1>
        <div className="form">
        <label htmlFor="email">User Email</label>
            <input  type="email" name="email" id="email" placeholder="user-email" required onChange={(e)=> 
            {
                setEmail(e.target.value)
            }}></input>
             <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="password" required onChange={(e)=> 
            {
                setPassword(e.target.value)
            }}></input>
            <button onClick={handleChange}>Submit</button>
        </div>
      
    </div>
  )
}

export default Login
