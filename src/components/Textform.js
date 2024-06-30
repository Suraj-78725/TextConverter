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
      setText();
    }
  const [text,setText]= useState();
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="3"></textarea>
    </div>
    <button className="btn btn-primary mt-4 p-2" onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary mt-4 mx-2 p-2" onClick={handlelpclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mt-4 mx-2 p-2" onClick={handlecleanclick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(' ').length} word and {text.length} character</p> 
      <p>{0.008 * text.split(' ').length} Minutes Read</p> 
      <h2>Preview</h2>
      <p>{text} </p>
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