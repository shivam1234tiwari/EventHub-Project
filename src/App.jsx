import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UpcomingEvents from "./components/UpcomingEvents";
import Categories from "./components/Categories";
import OrganizerSection from "./components/OrganizerSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ListEvent from "./pages/ListEvent";

function Home() {
  return (
    <>
      <Hero />
      <UpcomingEvents />
      <Categories />
      <OrganizerSection />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list-event" element={<ListEvent />} />
      </Routes>

      <Footer />
    </>
  );
}