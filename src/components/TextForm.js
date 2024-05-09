import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPClick = () =>{
        setText(Text.toUpperCase());
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleLWClick = () =>{
        setText(Text.toLowerCase());
    }
    const handleCopy = () =>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [Text,setText]=useState("");
  return (
    <>
    <div className="Container" style={{backgroundColor: props.mode==='dark' ? '#0b3764eb' : 'white', color:props.mode==='light' ? 'black' : 'white'}} >
        <h1>{props.header}</h1>
        <div className="mb-3">
        <label for="mybox" class="form-label">Textarea</label>
        <textarea className={`form-control`} style={{backgroundColor: props.mode==='dark' ? '#0b3764eb' : 'white', color:props.mode==='light' ? 'black' : 'white'}}   id="mybox" rows="8" onChange={handleOnChange} value={Text} placeholder='Enter the text' ></textarea>
        <button className="btn btn-info mx-1 my-2" onClick={handleUPClick}> Conver to Upper Case </button>
        <button className="btn btn-info mx-1 my-2" onClick={handleLWClick}> Conver to Lower Case </button>
        <button className="btn btn-danger mx-1 my-2" onClick={()=>setText("")}> Clear </button>
        <button className="btn btn-success mx-1 my-2" onClick={handleCopy}> Copy Text </button>
        <button className="btn btn-warning mx-1 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
        </div>
    </div>
    <div className="container my-2" style={{backgroundColor: props.mode==='dark' ? '#0b3764eb' : 'white', color:props.mode==='light' ? 'black' : 'white'}}  >
      <h2>Text Summary</h2>
      <p>{Text.length>0? Text.split(" ").length : 0} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(" ").length} Minutes read</p>
    </div>
    <div className="container my-2" style={{backgroundColor: props.mode==='dark' ? '#0b3764eb' : 'white', color:props.mode==='light' ? 'black' : 'white'}}  >
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Enter the text to preview it"}</p>
    </div>
    </>
  )
}
