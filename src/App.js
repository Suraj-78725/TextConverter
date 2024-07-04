
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import ALert from './components/ALert';
// import {
//   BrowserRouter as Router,
//   Route,
  
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");

  const [alerts,setAlert]=useState(null)

  const showAlert=(message,type)=>
  {
    setAlert({msg:message,
      type:type
    })
  }

  const toggleMode=()=>
    {
      if(mode==="light")
        {
          setMode("dark");
          document.body.style.backgroundColor="black";
          showAlert("Dark mode has been enabled","success")
        }
        else
        {
          setMode("light")
          document.body.style.backgroundColor="white";
          showAlert("light mode has been enabled","success")
        }
    }

    return (
    <>
    {/* <Router> */}
        <Navbar title="textutils" about="About textutils" mode={mode} toggleMode={toggleMode} />
        <ALert alerts={alerts}/>
        <div className="container">
        {/* <Routes>
        <Route exact path="about" element={<About />} /> */}
        <Textform heading="Enter the text to analyze" mode={mode}/>
        {/* </Routes> */}
        {/* <About/> */}
        </div>
        {/* </Router> */}
     </>
  );
}

export default App;
