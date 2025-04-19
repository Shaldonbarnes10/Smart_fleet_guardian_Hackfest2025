import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"
import { AuthProvider } from "./auth-context";
import AuthForm from "./components/auth/AuthForm";
import Statistics from "./pages/StatisticsPage";
import Dashboard from "./pages/Dashboard";
// Import other components as needed

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Auth" element={<AuthForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App