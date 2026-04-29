import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FormPage from "./pages/FormPage";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Router>
      <Sidebar />
      <ThemeToggle />

      <div className="main">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
          <Route path="/form" element={<PageWrapper><FormPage /></PageWrapper>} />
        </Routes>
      </div>
    </Router>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default App;