import { useState } from "react";
import { db } from "../services/firebase";
import { ref, onValue } from "firebase/database";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    const coursesRef = ref(db, "courses");

    onValue(
      coursesRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const coursesData = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setCourses(coursesData);
        } else {
          setCourses([]); // No courses available
        }
      },
      (error) => {
        console.error("Error fetching courses:", error);
      }
    );
  };

  return { courses, fetchCourses };
};
