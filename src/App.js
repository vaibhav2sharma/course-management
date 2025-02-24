import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CourseDetails from "./pages/CourseDetails";
import AssignmentPage from "./pages/AssignmentPage";
import StudentProfile from "./pages/StudentProfile";
import GradeDashboard from "./pages/GradeDashboard";
import { UserRoleProvider } from "./context/UserRoleContext";
import Navbar from "./components/Navbar";
import "./styles/global.css";

function App() {
  return (
    <UserRoleProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/assignment/:id" element={<AssignmentPage />} />
          <Route path="/student/:id" element={<StudentProfile />} />
          <Route path="/dashboard" element={<GradeDashboard />} />
        </Routes>
      </Router>
    </UserRoleProvider>
  );
}

export default App;
