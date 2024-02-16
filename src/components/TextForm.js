import React, {useState} from 'react'

export default function TextForm(props) {
 
    const [text,setText]=useState(" ");
    // const [Bold, setBold] = useState("convert to bold");

    // const toggleStyle = () => {
    //   //  setBold(text.bold())
    //   //    };

    //   if(text.fontWeight===Bold){
    //     setText(text.bold());
    //     setBold("covert to normal")
    //   }
    //  else{
    //   setText(text);
    //   setBold("covert to bold")
    //  }
      
    // };

    // const handleBoldChange=()=>{
    //   setText(text.bold())
    // };
  const upperCase=()=>{
    setText(text.toUpperCase())
  };
  const resetData=()=>{
    setText("");
  };
  const lowercase=()=>{
    setText(text.toLowerCase())
  };
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
 
  return ( 
    
    <div className='container' style={{backgroundColor: props.mode==='dark'?'#04073b':'white',color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text}id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'dark'}} ></textarea>
  <div className='mainbtn'>
  <button className="btn1" onClick={upperCase}>uppercase</button>
  <button className="btn1" onClick={resetData}>Reset</button>
  <button className="btn1" onClick={lowercase}>lowercase</button>
  {/* <button className="btn1" onClick={toggleStyle}>convert to bold</button> */}
  </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p> {text.split(' ').filter((element)=>{return element.length!==0}).length} words </p>
      <p> {text.length} characters </p>
      <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p> {text} </p>
    </div>
    
    </div>
    
  );
}

