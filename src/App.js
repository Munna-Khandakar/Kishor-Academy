import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import Workshop from "./pages/Workshop";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./pages/Testimonial";
import CourseLevel from "./pages/CourseLevel";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course/:tag_slug" element={<Course />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/courses/:level" element={<CourseLevel />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/testimonial" element={<Testimonial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
