
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');

  const toggleMode=()=>{
     if(mode === 'light'){
      setMode('dark') 
      document.body.style.backgroundColor = '#04073b'
     }
     else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
     }
  }
  return (
    <>
    <Router>
 <Navbar title="Textutils" about="about us" mode={mode} toggleMode={toggleMode}/>
 <div className="container my-3">
 
          <Route exact path="/about">
             <About />
          </Route>
          <Route exact path="/">
        <TextForm heading="Enter the text" mode={mode}/>
         </Route>    
 
 </div>
 </Router>
    </>
  );
}

export default App;
