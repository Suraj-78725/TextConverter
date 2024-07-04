
import React,{useState} from 'react'
// import PropTypes from 'prop-types'
export default function Textform(props) {
  const handleupclick=()=>
    {
      let newText=text.toUpperCase();
      setText(newText);
    }
    const handlelpclick=()=>
      {
        let newText=text.toLowerCase();
        setText(newText);
      }
    const handleonchange=(event)=>
    {
      setText(event.target.value)
    }
    const handlecleanclick=()=>
    {
      setText("");
    }
    const handlecopyclick=()=>
      {
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
      }
    const handlespaceclick=()=>
      {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
      }
  const [text,setText]= useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="3" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'  }}></textarea>
    </div>
    <button className="btn btn-primary mt-4 p-2" onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary mt-4 mx-2 p-2" onClick={handlelpclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mt-4 mx-2 p-2" onClick={handlecleanclick}>Clear Text</button>
    <button className="btn btn-primary mt-4 mx-2 p-2" onClick={handlecopyclick}>Copy text</button>
    <button className="btn btn-primary mt-4 mx-2 p-2" onClick={handlespaceclick}>Remove space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p> {/* <- Changed */}
      <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes Read</p> {/* <- Changed */}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in above textarea"}</p>
    </div>
    </>
  ) 
}


// Textform.propTypes={
//   heading:PropTypes.string
// }
// Textform.defaultProp={
// heading:"suraj"
// }