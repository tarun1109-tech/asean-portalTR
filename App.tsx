import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import StudentLookup from "./student-lookup";
import ComplaintForm from "./complaint-form";
import AdminLogin from "./admin-login";
import AdminDashboard from "./admin-dashboard";
import AdminComplaints from "./admin-complaints";
import AdminStudents from "./admin-students";
import NotFound from "./not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lookup" element={<StudentLookup />} />
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/complaints" element={<AdminComplaints />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;