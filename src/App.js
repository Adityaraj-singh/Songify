import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Myprofile from './Components/Myprofile'
import Settings from './Components/Settings'
import Hello from './Components/Likes'
import { Component } from 'react';
import {Container} from 'react-bootstrap'
import { render } from '@testing-library/react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './needed/main.css' 
import './Components/MyStyle.css'
function App() {
 

    return (
      <div className="app  bg-red-400">
     <Home/>
     </div>
    )

  }
 

export default App;