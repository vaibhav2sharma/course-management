import { db } from "./firebase"; // Adjust the path based on your folder structure
import { ref, get, child } from "firebase/database";

// Function to fetch courses from Firebase
export const getCourses = async () => {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, "courses")); // Make sure "courses" is a valid node in your Firebase database
    if (snapshot.exists()) {
      return Object.entries(snapshot.val()).map(([id, data]) => ({
        id,
        ...data,
      }));
    } else {
      console.log("No courses available.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};
