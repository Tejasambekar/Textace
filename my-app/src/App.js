
import React,{ useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
   Route,
   
  } from "react-router-dom";

function App() {
  const[mode, setMode]= useState('light');//whether dark is enabled or not
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);},3000)
    
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#2d2727';
    showAlert("Dark Mode has been enabled","success");
    document.title="TextAce - Dark Mode"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has been enabled","success") ;
        document.title="TextAce - light Mode"
  }
}
  return(
  <>  
  <Router>
<Navbar title="TextAce" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
<Route path="/about" element={<About  mode={mode}/>} />
<Route path="/" element={<TextForm showAlert={showAlert}  mode={mode} heading="Enter your text to analyze" />}/>
    
</Routes>
</div>
</Router>
  

    

</>

  );
}

export default App;

