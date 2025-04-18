import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AuthForm from "./components/auth/AuthForm";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/StatisticsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
};

export default App;
