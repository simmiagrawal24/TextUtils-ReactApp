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
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          placeholder="Enter text here"
          onChange={handleOnChange}
          style ={{backgroundColor: props.mode ==='dark' ? 'grey' : 'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    <div className="container my-3" style ={{color: props.mode ==='dark' ? 'white' : 'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length } Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something in the textbox to preview it here'}</p>
    </div>
    </>
  );
}
