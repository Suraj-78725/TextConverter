
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';

function App() {
  return (
    <>
 <Navbar title="textutils" about="About textutils"/>
 <div className="container">
 {/* <Textform heading="Enter the text to analyze"/> */}
 <About/>
 </div>
     </>
  );
}

export default App;
