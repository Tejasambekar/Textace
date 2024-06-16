import React,{useState} from 'react'
// import Alert from './components/Alert';

// console.log(useState('Enter text here 2');)
export default function TextForm(props) {
   
const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text)
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case","success") ;


}
const handleLowClick=()=>{
    // console.log("Lowercase was clicked"+text)
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case","success") ;

}
const handleOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value)
    
    
}
const handleCopy=(event)=>{
    var text=document.getElementById('myBox');
    text.select()
    
    navigator.clipboard.writeText(text.value);
}
const handleClear=(event)=>{
    console.log("On Change")
    setText("")
    
}
const handleExtraspaces=()=>{
    //console.log("Uppercase was clicked"+text)
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))

}

const [text,setText]=useState("");

return (
<>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="mb-3">
        <h1 >{props.heading}</h1>
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1a1616':'white',color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="10"></textarea>
        <div className="row d-flex flex-row justify-content-start ">
        <button className="btn mx-2 col-5 col-md-3  btn-primary my-2 " onClick={handleUpClick}>change to upper case</button>
        <button className="btn mx-2 col-5 col-md-3 btn-primary my-2" onClick={handleLowClick}>change to Lower case</button>
        <button className="btn mx-2 col-5 col-md-3  btn-primary my-2" onClick={handleClear}>clear</button>
        <button className="btn mx-2 col-5 col-md-3   btn-primary my-2" onClick={handleClear}>clear</button>
        <button className="btn mx-2 col-5 col-md-2   btn-primary my-2" onClick={handleClear}>clear</button>
        <button className="btn mx-2  col-5 col-md-2  btn-primary my-2" onClick={handleCopy}>copy</button>
        <button className="btn mx-2 col-5 col-md-2  btn-primary my-2" onClick={handleExtraspaces}>extra spaces</button>
        </div>
    </div>
</div>
<div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text Summary</h2>
    <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> Characters</p>
    <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length} </b>minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something to preview"}</p>
</div>
</>
)
}
