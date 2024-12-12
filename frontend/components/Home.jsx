import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
 return (
    <div className="titleContainer">
        <h1 className="title welcome" >Welcome</h1>
        <h1 className="title to" >To</h1>
        <h1 className="title rubix" >Rubix</h1>
    <div>
        <button className="homeButton">Play!</button>
    </div>
    </div>
 )
}

export default Home