import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import About from "./other/About";
import Landing from "./Landing/Landing";
import Owner from "./other/Owner";
import Vet from "./other/Vet";
import Shelter from "./other/Shelter";
import Feedback from "./other/Feedback";
import Sidebar from "./other/Sidebar";
import Emergency from "./other/Emergency";
import Petcare from "./other/pet-care";
import ProductShowcase from "./other/Product";
import ContactUs from "./other/Contact";
import Marquee from "./Marquee";

function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1}}>{children}</main>
    </div>
  );
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const elems = document.querySelectorAll(".float-element");

      elems.forEach((el, i) => {
        const speed = 0.5 + i * 0.1;
        el.style.transform = `translateY(${scrolled * speed}px) rotate(${
          scrolled * 0.1
        }deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      {/* floating stuffs */}
      <div className="float-element paw-1">🐾</div>
      <div className="float-element paw-2">🐾</div>
      <div className="float-element bone-1">🦴</div>
      <div className="float-element bone-2">🦴</div>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/about"
          element={
            <DashboardLayout>
              <About />
            </DashboardLayout>
          }
        />
        <Route
          path="/vet"
          element={
            <DashboardLayout>
              <Vet />
            </DashboardLayout>
          }
        />
        <Route
          path="/shelter"
          element={
            <DashboardLayout>
              <Shelter />
            </DashboardLayout>
          }
        />
        <Route
          path="/shelter/#available-animals"
          element={
            <DashboardLayout>
              <Shelter />
            </DashboardLayout>
          }
        />
        <Route
          path="/shelter/#events"
          element={
            <DashboardLayout>
              <Shelter />
            </DashboardLayout>
          }
        />
        <Route
          path="/shelter/#ss"
          element={
            <DashboardLayout>
              <Shelter />
            </DashboardLayout>
          }
        />
        <Route
          path="/shelter/#gi"
          element={
            <DashboardLayout>
              <Shelter />
            </DashboardLayout>
          }
        />
        <Route
          path="/emergency"
          element={
            <DashboardLayout>
              <Emergency />
            </DashboardLayout>
          }
        />

        <Route
          path="/feedback"
          element={
            <DashboardLayout>
              <Feedback />
            </DashboardLayout>
          }
        />
        <Route
          path="/petcare"
          element={
            <DashboardLayout>
              <Petcare />
            </DashboardLayout>
          }
        />
        <Route
          path="/product"
          element={
            <DashboardLayout>
              <ProductShowcase />
            </DashboardLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <DashboardLayout>
              <ContactUs />
            </DashboardLayout>
          }
        />
        <Route
          path="/about"
          element={
            <DashboardLayout>
              <About />
            </DashboardLayout>
          }
        />
        <Route
          path="/landing"
          element={
            <DashboardLayout>
              <Landing />
            </DashboardLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
      <Marquee />
      
    </div>
  );
}
