import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';
import '../../pages/App/App.css';



const NavBar = (props) => {
  let nav = props.user ?
    <div >
      <Link to='/' className='btn NavBar-link'><img style={{marginTop:"5px", height:30, width: 30, borderRadius: "20%"}} src="https://i.imgur.com/Amry0RH.png" alt="" /></Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link exact to='/market' className='NavBar-link'>MARKET</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link exact to='/add' className='NavBar-link'>PRODUCT+</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/cart' className='NavBar-link'>CART</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/profile' className='NavBar-link'>PROFILE</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOGOUT</Link>
      <p className='NavBar-welcome'>Welcome back, {props.user.name}!</p>
    </div>
    :
    <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>LOGIN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGNUP</Link>
      <p>Please sign in...</p>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;