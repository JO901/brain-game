import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='Navbar'>
      <Link className='link' to={'/'}>
        Home
      </Link>
      <Link className='link' to={'/Misc'}>
        Play!
      </Link>
      <Link className='auth link' to={'/Misc'}>
        Login
      </Link>
      <Link className='link' to={'/Login'}>SignUp</Link>
    </div>
  );
};

export default Nav;
