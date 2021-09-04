import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const[text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
        <textarea className="form-control" value={text} 
        onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert To LowerCase</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes time take to read the text</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
