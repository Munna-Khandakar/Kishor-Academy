import "./AllCourses.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card2 from "../Card2/Card2";
import HeartEmoji from "../../img/heartemoji.png";

function AllCourses() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://localhost:2368/ghost/api/content/tags/?key=${process.env.REACT_APP_GHOST_CONTENT_API_KEY}`
      )
      .then((res) => {
        // console.log(res.data.tags);
        setCourses(res.data.tags);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="all-courses">
      {courses &&
        courses.map((course, index) => (
          <Card2
            key={index}
            emoji={course.feature_image}
            name={course.name}
            description={course.description}
            tag_slug={course.slug}
          />
        ))}
    </div>
  );
}

export default AllCourses;
