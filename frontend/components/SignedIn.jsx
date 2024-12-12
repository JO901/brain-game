import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignedIn = () => {
  const navigate = useNavigate();

  function getdatabase() {
    fetch('api/get')
      .then((res) => res.json())
      .then((characters) => {
        console.log(characters);
      })
      .catch((err) => console.log('got nothing', err));
  }

  function test() {
    let name = document.querySelector('#name').value;
    let pass = document.querySelector('#pass').value;
    console.log('name:', name);
    console.log('pass:', pass);
    fetch('api/find', {
      method: 'POST',
      body: JSON.stringify({ name, pass }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((characters) => {
        if (characters.hi === 'hi') {
          document.querySelector('#passbadold').style.visibility = 'visible';
          console.log(characters);
        } else {
          navigate("/Main");

        }

      })
      .catch((err) => console.log('got nothing', err));
  }

  return (
    <div className='formContainer'>
      <div className='user'>
        <label htmlFor='name'>Username: </label>
        <input type='text' name='name' id='name' required />
      </div>
      <div className='pass'>
        <label htmlFor='pass'>Password: </label>
        <input type='password' name='pass' id='pass' required />
      </div>
      <div>
        <button onClick={test}>'Log In!'</button>
      </div>
      <p id='passbadold' style={{visibility: 'hidden', color: 'red'}} >Password or Username not found</p>
    </div>
  );
};

export default SignedIn;
