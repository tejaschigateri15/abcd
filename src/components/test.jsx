// import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {set_user_info} from './state.jsx'
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function Test() {
    const [user,setuser] = useState("")

    const dispatch = useDispatch()
    const username = useSelector(state => state.username)

  return (
    <div>
        <div >hello world vh {username}</div>
        <TextField type="text" onChange={(e)=>{setuser(e.target.value)}}/>

        <Button onClick={()=>{dispatch(set_user_info(user))}} variant='contained'>click me </Button>
        
    </div>
  )
}