import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';
import '../../pages/App/App.css';



const NavBar = (props) => {
  let nav = props.user ?
    <div >
      <Link to='/' className='btn btn-light'><img className="homelink" src="https://i.imgur.com/Amry0RH.png" alt="" /></Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link exact to='/market' className='btn btn-info'>MARKET</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link exact to='/add' className='btn btn-success'>PRODUCT+</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/cart' className='btn btn-warning'>CART</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/profile' className='btn btn-primary'>PROFILE</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/about' className='btn btn-info'>ABOUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' className='btn btn-danger' onClick={props.handleLogout} >LOGOUT</Link>
      <p className='NavBar-welcome'>Welcome back, {props.user.name}!</p>
    </div>
    :
    <div>
      <Link to='/' className='btn btn-info'>HOME</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/login' className='btn btn-warning'>LOGIN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='btn btn-danger'>SIGNUP</Link>
      <p>Please sign in...</p>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;