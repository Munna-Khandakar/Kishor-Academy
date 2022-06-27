import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Courses from "../components/Courses/Courses";
import "../App.css";
import Experience from "../components/Experience/Experience";
import Workshop from "../components/Workshop/Workshop";
import Portfolio from "../components/Portfolio/Portfolio";
import Testimonial from "../components/Testimonials/Testimonial";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";

function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Courses />
      <Experience />
      <Workshop />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
