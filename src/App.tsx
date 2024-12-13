import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Scheduling from "./pages/Scheduling/Scheduling";
import Consultation from "./pages/Consultation/Consultation";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agendamentos" element={<Scheduling />} />
          <Route path="/consultas" element={<Consultation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
