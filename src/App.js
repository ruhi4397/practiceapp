
import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
    type: type 
  })
  setTimeout(()=>{
setAlert(null);
  },1500);
}
  const toggleMode = () =>{
if (mode === 'light'){
  setMode('dark');
  document.body.style.backgroundColor="#042743";
  showAlert("Dark Mode has been enabled","success");
  document.title="TextUtil-DarkMode";
  
}
else{
  setMode('light');
  
  document.body.style.backgroundColor="white"; 
  showAlert("Light Mode has been enabled","success"); 
  document.title="TextUtil-LightMode";

}

  }
  return (
    <>
   <Router>
      {/* props value called / added in Navbar.js */}
  
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode= {toggleMode} />
      <Alert alert={alert}/>
      <div className="container my -3">
      
      <Routes>
         <Route path="/about" element={<About mode={mode}/>}/>
         <Route path="/" element={<TextForm showAlert={showAlert}heading=" Enter the text to analyse below." mode={mode}/>}/>
          {/*<TextForm showAlert={showAlert}heading=" Enter the text to analyse below." mode={mode} />*/}
        </Routes>
       </div>
       </Router>
       
    </>
  );
}

export default App;
