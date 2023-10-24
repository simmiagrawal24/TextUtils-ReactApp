import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + text)
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to Upper Case!" , "success")
  };
  
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    
    setText(newText);
    props.showAlert("Converted to Lower Case!" , "success")
  }
  
  const handleClearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!" , "success")
  }

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied to Clipboard" , "success")
  }

  const handleExtraSpaces = () =>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed" , "success")
  }

  const [text, setText] = useState("");
  // setText("new text");

  return (
    <>
      {/* <h1>{props.heading}</h1> */}
    <div className="container" style ={{ color: props.mode ==='dark' ? 'white' : 'black'}}>
      <h1 className = 'mb-4'> {props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label> */}
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          placeholder="Enter text here"
          onChange={handleOnChange}
          style ={{backgroundColor: props.mode ==='dark' ? '#13466e' : 'white'}}
        ></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
        Convert to Lower Case
      </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>
        Clear Text
      </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style ={{color: props.mode ==='dark' ? 'white' : 'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").filter((element)=>{
        return element.length!==0
      }).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{
        return element.length!==0
      }).length } Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  );
}
