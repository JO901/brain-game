import React from 'react';

const SignUp = () => {
  function test() {
    let name = document.querySelector('#newname').value;
    let pass = document.querySelector('#newpass').value;
    console.log('new name:', name);
    console.log('new pass:', pass);
    fetch('api/make', {
      method: 'POST',
      body: JSON.stringify({ name, pass }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((characters) => {
        if (characters.hi === 'created') {
            document.querySelector('#passgood').style.visibility = 'visible'
        } else {
            document.querySelector('#passbad').style.visibility = 'visible'
        }
      })
      .catch((err) => console.log('got nothing', err));
  }

  return (
    <div className='formContainer'>
      <div className='newuser'>
        <label htmlFor='name'>Enter a new Username: </label>
        <input type='text' name='name' id='newname' required />
      </div>
      <div className='newpass'>
        <label htmlFor='pass'>Enter a new Password: </label>
        <input type='password' name='pass' id='newpass' required />
      </div>
      <div>
        <button onClick={test}>Submit</button>
      </div>
      <p id='passgood' style={{visibility: 'hidden', color: 'green'}} >User Created</p>
      <p id='passbad' style={{visibility: 'hidden', color: 'red'}} >User NOT Created</p>
    </div>
  );
};

export default SignUp;
