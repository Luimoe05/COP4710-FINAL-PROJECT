import { useState } from "react";
import "./styles/index.css";
import StudentsPage from "./pages/StudentsPage";
import InstructorsPage from "./pages/InstructorsPage";
import CoursesPage from "./pages/CoursesPage";
import StaffPage from "./pages/StaffPage";
import EnrollmentsPage from "./pages/EnrollmentsPage";
import GradesPage from "./pages/GradesPage";
// import SchedulesPage from "./pages/SchedulesPage";

const pages = [
  { key: "students", label: "Students" },
  { key: "instructors", label: "Instructors" },
  { key: "courses", label: "Courses" },
  { key: "staff", label: "Staff" },
  { key: "enrollments", label: "Enrollments" },
  { key: "grades", label: "Grades" },
];

const pageMap = {
  students: <StudentsPage />,
  instructors: <InstructorsPage />,
  courses: <CoursesPage />,
  staff: <StaffPage />,
  enrollments: <EnrollmentsPage />,
  grades: <GradesPage />,
};

export default function App() {
  const [active, setActive] = useState("students");

  return (
    <>
      <nav className="sidebar">
        <p className="sidebar-title">School ADMIN System</p>
        {pages.map((p) => (
          <div
            key={p.key}
            className={`nav-item ${active === p.key ? "active" : ""}`}
            onClick={() => setActive(p.key)}
          >
            {p.label}
          </div>
        ))}
      </nav>
      <main className="main">{pageMap[active]}</main>
    </>
  );
}
