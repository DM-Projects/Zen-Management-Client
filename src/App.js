import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
//some random contribution. I may start to work in this tomorrow. I don't know how to use hooks yet, but I'll learn along the way.

/* DOCUMENT THE CODEEE: Please add a brief commentary in whcih you specify what you're doing. As someone use to say... I'm no magician */

function App() {

    // eslint-disable-next-line
  const [serverStatus, setServerStatus] = useState("WAITING");

  useEffect(()=>{

    axios.get("http://localhost:8000/api/v1/runtime").then((data)=>{
      console.log(data);
      setServerStatus(data.status)
    }).catch((error)=>{
        console.log(error);
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h3>Server Status: {serverStatus.toString()}</h3>
      </header>
    </div>
  );
}

export default App;
