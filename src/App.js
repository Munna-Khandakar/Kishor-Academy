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
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  //console.log("first");
  //console.log(process.env.REACT_APP_GHOST_CONTENT_API_KEY);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course/:tag_slug" element={<Course />} />
        <Route exact path="/courses" element={<Courses />} />
        {/* <Route path="/form" element={<HorizontalStepperWithError />} /> */}
      </Routes>
    </BrowserRouter>
    // <Home />
  );
}

export default App;
