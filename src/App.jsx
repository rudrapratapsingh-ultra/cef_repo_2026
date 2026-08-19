import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CompetitionsPage from "./pages/Competitions";
import GuestSessionsPage from "./pages/GuestSessions";
import MagazinePage from "./pages/Magazine";
import StudyMaterialPage from "./pages/StudyMaterial";
import './index.css'

function App() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/guest-sessions" element={<GuestSessionsPage />} />
        <Route path="/magazine" element={<MagazinePage />} />
        <Route path="/study-material" element={<StudyMaterialPage />} />
        {/* Fallback to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

  

export default App;
