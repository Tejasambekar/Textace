import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:'dark',
    //     backgroundColor:'white'
    //  })
    //const[btnText,setBtnText]=useState('Enable dark Mode');
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'black':'white',
        //border:'2px solid',
        borderColor:props.mode==='dark'?'white':'black'
    }
  return (
    <div className="container vw-100 h " style={myStyle}>
        <h2 className="my-3" style={{backgroundColor: props.mode==='dark'?'black':'white',
       }}>About Us</h2>
            <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" tyle={{backgroundColor: props.mode==='dark'?'black':'white',
       }}>
            <button className="accordion-button" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
                Text utils gives you a way to analyze your text quickly and efficiently. Be it word count, char count 
                 </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" style={{backgroundColor: props.mode==='dark'?'black':'white',
       }}>
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" style={{backgroundColor: props.mode==='dark'?'black':'white',
       }}>
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
                This word counter Software works in any web browsers such as chrome, Firefox, Internet.
                </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}
