import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './bg.less';


function App() {
  const [theme,setTheme] = useState("default_container")
  useEffect(()=>{
    setInterval(()=>{
      if(theme==="default_container"){
        setTheme("dark_container")
      }else{
        setTheme("default_container")
      }
    },2000)
  },[])
  return (
    <div className={'App '+theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
