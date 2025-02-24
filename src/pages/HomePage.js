import React, { useEffect } from "react";
import { useUserRole } from "../context/UserRoleContext";
import { useCourses } from "../hooks/useCourses";
import CourseCard from "../components/CourseCard";

const HomePage = () => {
  const { role, changeRole } = useUserRole();
  const { courses, fetchCourses } = useCourses();

  useEffect(() => {
    console.log("HomePage mounted - calling fetchCourses");
    fetchCourses();
  }, []);

  return (
    <div className="home-container">
      <h1>Welcome to the Course Management Portal</h1>
      <label>Role Selection: </label>
      <select value={role} onChange={(e) => changeRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>

      <div className="course-list">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>Loading courses...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
