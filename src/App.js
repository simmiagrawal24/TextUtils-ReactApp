import "./App.css";
//import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';

// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);

 const showAlert = (message,type)=>{
  setAlert({
    msg : message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  } , 1000)
 }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled" , "success")
      //document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils is AmAZING"
      // },2000);
      // setInterval(()=>{
      //   document.title = "Install TextUtils now"
      // },1500);
    }
    
    else {
      setMode ('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled" , "success")
      //document.title = "TextUtils - Light Mode"

    }
  }


  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}


      {/* <BrowserRouter>
      <Navbar title="TextUtils" aboutText = "About" mode = {mode} toggleMode={toggleMode} />
      <Alert alert = {alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element = {<About />} />   
      </Routes>
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode = {mode}/> } />
      </Routes>
      </div>
      </BrowserRouter> */}

     <Navbar title="TextUtils" aboutText = "About" mode = {mode} toggleMode={toggleMode} />

      <Alert alert = {alert} />
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter , Character Counter , Remove extra spaces" mode = {mode}/>
      </div>
      {/* <div className="container my-3">
        <About mode ={mode}/>
      </div> */}
      
    </>
  );
}

export default App;
