 import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import AboutSection from "./components/AboutSection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import Works from "./components/Works";
import ContactSection from "./components/ContactSection";


function App() {
  const webgiViewerRef =  useRef();
  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  }
  const contentRef= useRef()

  return (
    <div className="App">
      {/* <Loader/> */}
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron/>
        <AboutSection/>
        <Works/>
        <ContactSection/>
       
        <DisplaySection  triggerPreview={handlePreview} />
        
      </div>
     <WebgiViewer contentRef={contentRef}  ref={webgiViewerRef}/>
    </div>
  );
}

export default App;
