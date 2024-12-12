import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div id='Navbar'>
      <Link className='link' to={'/'}>
        Home
      </Link>
      <Link className='link' to={'/Main'}>
        Play!
      </Link>
      <Link className='auth link' to={'/Misc'}>
        SignUp
      </Link>
    </div>
  );
};

export default Nav;
