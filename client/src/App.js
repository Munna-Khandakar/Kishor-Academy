// import Navbar from "./components/Navbar/Navbar";
// import Intro from "./components/Intro/Intro";
// import Courses from "./components/Courses/Courses";
// import Experience from "./components/Experience/Experience";
// import Workshop from "./components/Workshop/Workshop";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Testimonial from "./components/Testimonials/Testimonial";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import { useContext } from "react";
// import { themeContext } from "./Context";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";

function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    // <div
    //   className="App"
    //   style={{
    //     background: darkMode ? "black" : "",
    //     color: darkMode ? "white" : "",
    //   }}
    // >
    //   <Navbar />
    //   <Intro />
    //   <Courses />
    //   <Experience />
    //   <Workshop />
    //   <Portfolio />
    //   <Testimonial />
    //   <Contact />
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/form" element={<HorizontalStepperWithError />} /> */}
      </Routes>
    </BrowserRouter>
    // <Home />
  );
}

export default App;
