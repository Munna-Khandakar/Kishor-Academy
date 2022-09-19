import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card2 from "../components/Card2/Card2";
import CardSkeleton from "../components/CardSkeleton/CardSkeleton";
import { useContext } from "react";
import { themeContext } from "../Context";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function CourseLevel() {
  let { level } = useParams();
  const [courses, setCourses] = useState(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_GHOST_APP_URL}/ghost/api/content/tags/?key=${process.env.REACT_APP_GHOST_CONTENT_API_KEY}`
      )
      .then((res) => {
        courseFilter(level, res.data.tags);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const courseFilter = (level, tags) => {
    const filteredCourse = [];
    if (level == "beginner") {
      for (let i = 0; i < tags.length; i++) {
        let a = tags[i].slug.split("-");
        if (a[0] == "level1") {
          filteredCourse.push(tags[i]);
        }
      }
    }
    if (level == "intermediate") {
      for (let i = 0; i < tags.length; i++) {
        let a = tags[i].slug.split("-");
        if (a[0] == "level2") {
          filteredCourse.push(tags[i]);
        }
      }
    }
    if (level == "advanced") {
      for (let i = 0; i < tags.length; i++) {
        let a = tags[i].slug.split("-");
        if (a[0] == "level3") {
          filteredCourse.push(tags[i]);
        }
      }
    }
    setCourses(filteredCourse);
  };
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <div className="all-courses">
        {courses ? (
          courses.map((course, index) => (
            <Card2
              key={index}
              emoji={course.feature_image}
              name={course.name}
              description={course.description}
              tag_slug={course.slug}
            />
          ))
        ) : (
          <>
            <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CourseLevel;
