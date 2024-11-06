import React from 'react'
import classes from './login.module.css';
const login = () => {
  return (
    <div>
      
       <h1>login page</h1>
        <button className='global-btn'>global login button</button>
        <button className={classes.loginBtn}>Local button</button>
        </div>
  )
}

export default login;