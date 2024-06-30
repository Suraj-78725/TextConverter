
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [mode,setMode]=useState("light");
  const toggleMode=()=>
    {
      if(mode==="light")
        {
          setMode("dark");
          document.body.style.backgroundColor="black";
          // document.body.style.textColor="white";
        }
        else
        {
          setMode("light")
          document.body.style.backgroundColor="white";
        }
    }
  return (
    <>
 <Navbar title="textutils" about="About textutils" mode={mode} toggleMode={toggleMode} />
 <div className="container">
 <Textform heading="Enter the text to analyze" mode={mode}/>
 {/* <About/> */}
 </div>
     </>
  );
}

export default App;
