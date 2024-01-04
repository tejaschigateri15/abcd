// import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { set_user_info } from "../state";
import '../css/login.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';

// import { set } from 'mongoose';


export default function Signin() {
  const dispatch = useDispatch()
  const user_info = useSelector((state) => state.username)

  // const [blog_id,setblog_id] = useContext(mycontext)

  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });

  
  const [yes,setYes]=useState(false);
  const [idd,setid] = useState([])

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8080/login', formData)
      // setid(response.data)
      console.log("fdfdfd : ",response.data)
      const { info } = response.data
      const {  username,id, email } = info
      console.log("vcvc",username,email,id)
      dispatch(set_user_info({username ,id}))
      if (response.status === 200) {
        
          navigate('/');

      } else {
        setYes(true);
      }
  
      console.log("login was correct", response.status);
    } catch (err) {
      console.log(err);
      setYes(true);
    }
  };

  const googleauth = async () => {

    try{
      console.log("google auth")
      const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider)
        console.log(user)
        navigate('/')

    }catch(err){
      console.log(err)
    }

  }
  
  
  // const isError = formData.password.length < 10;
  return (
    <div>
      <div className="sign-up flex flex-row">
        <div className="content basis-1/2">
          <h2 className='ll text-center'>Dive into the Blogosphere with Us!</h2>
          <div className="form">
            <div className="contentt">
              <div className="inputs">
                
                <TextField id="email" label="Email" variant="standard" InputLabelProps={{ style: { color: '#546e7a' } }} name='email' onChange={handleInputChange} />
                <TextField id="password" label="Password" variant="standard" type="password" InputLabelProps={{ style: { color: '#546e7a' } }}

                  onChange={handleInputChange}
                  error={yes}
                  helperText={yes ? 'Incorrect email or password' : ''}
                  name='password'
                />
                <Button variant="outlined" onClick={handlesubmit}>Login</Button>
                <Button  onClick={googleauth}><img src="https://b2069963.smushcdn.com/2069963/wp-content/uploads/2019/06/new-google-favicon-512-400x250.png?lossy=1&strip=1&webp=1" alt="" width="20px" height="60px"/>Login as Google</Button>
                <p className='log-in'>don't have an account? <Link to='/signup'> Signup</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="sideimage basis-1/2">
          <img src="closeup-shot-purple-neon-lights-forming-triangular-shapes-perspective.jpg" alt="hello" className="h-screen w-full" />
        </div>
      </div>
    </div>
  );
}
