//import React , {useState} from "react";
import React from 'react';

export default function About(props) {

//   const [myStyle , setMyStyle] = useState({
//     color :'white',
//     backgroundColor : 'black'
// })


//const [btnText , setBtnText] = useState("Enable Dark Mode")
    
// const toggleStyle=  () =>{
//   if(myStyle.color === 'white'){
//     setMyStyle({
//       color:'black',
//       backgroundColor:'white'
//     })
//     setBtnText("Enable Dark Mode");
//   }
//   else{
//     setMyStyle({
//       color:'white',
//       backgroundColor:'black'
//     })
//     setBtnText("Enable Light Mode");
//   }
// }

let myStyle = {
  color: props.mode ==='dark'?'white':'#042743',
  backgroundColor:props.mode ==='dark'?'rgb(36 74 104)':'white',
//   border: '1px solid ',
//   borderColor: props.mode ==='dark'?'white':'#042743'
 }

  return (
    <div className="container" style = {{color:props.mode ==='dark'?'white':'#042743'}}>
        <h2 className = "my-3">About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample" >
        <div className="accordion-item" style = {myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style = {myStyle}
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style = {myStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count ,character count or 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
              style = {myStyle}
            >
              Free to Use
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style = {myStyle}>
              TextUtils is a free chracter counter tool that provide sinstant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style = {myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style = {myStyle}>
              This word counter software works ina nay web browsers such as Chrome,Firefox,Internet Explorer , Safari , Opera. It suits to count characters in facebook,blogs,boooks,excel document,pdf,document,essays etc.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick = {toggleStyle} type = "button" className = "btn btn-primary my-3">{btnText}</button>
      </div> */}
    </div>
  );
}
