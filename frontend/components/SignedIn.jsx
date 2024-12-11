import React from "react";
import { Link } from "react-router-dom";

const SignedIn = () => {

    function getdatabase() {
      fetch('api/get')
      .then(res => res.json())
      .then((characters) => {
        console.log(characters)
      })
      .catch(err => console.log('got nothing', err));
    }
  
  
    return (
      <div>
        <h1>React is working</h1>
        <button onClick={getdatabase}>Click</button>
        <button>take me to login</button>
        <Link to={'/Login'}>Login</Link>;
        <Link to={'/Main'}>Main</Link>;
      </div>
    );
  };

  export default SignedIn