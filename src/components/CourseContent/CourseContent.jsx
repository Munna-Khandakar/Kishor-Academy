import "./CourseContent.css";
function CourseContent({ content }) {
  return (
    <>
      <div
        className="course-content-wrapper"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}

export default CourseContent;
