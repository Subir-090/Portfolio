import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./components/Work";
import About from "./components/About";
import Resume from "./components/Resume";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Introduction />
      <Routes>
        <Route path="/" element={<Work />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
