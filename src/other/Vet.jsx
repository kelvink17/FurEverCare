"use client";

import "../other/Vet.css";
import Sidebar from "./Sidebar";
// import { useLocation } from "react-router-dom";
import { appointments } from "./vetdata";
import { useState, useEffect, useContext } from "react";
import Footer from "./Footer";
import { UserContext } from "../UserContext";

export default function Vet() {
  // const location = useLocation();
  // const { name, specialization, contact, vetImage } = location.state || {};
  const { user } = useContext(UserContext);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("siteVisitorCount");
    const initialCount = storedCount ? Number(storedCount) : 0;
    const newCount = initialCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem("siteVisitorCount", newCount);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
    <div className="vet">
      <div></div>
      <div className="main2">
        <div className="wvet">Welcome, {user.name} </div>
        <div className="head">Profile</div>
        <div className="main3">
          <div>
            {user.vetImage && (
              <img
                src={user.vetImage}
                alt="Vet"
                style={{
                  width: "250px",
                  borderRadius: "15px",
                }}
              />
            )}
            <div className="textt ">Specialization : {user.specialization}</div>
            <div className="textt ">Contact : {user.contact}</div>
          </div>
          <div>
            <div className="medh">Pet Medical Histories</div>
            <p className="hh">-Bella (Dog): Vaccinated</p>
            <p className="hh">-Kitty (Cat):Flu Recovery</p>
            <p className="hh">-Max (Dog):Dental Check</p>
          </div>
        </div>
      </div>

      <div className="mainn">
        <div className="head2">Appointments</div>
        <div className="cdata">
          {appointments.map((items) => (
            <div key={items.day} className="run">
              <div className="data">
                {items.day} :{items.time} : {items.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer visitorCount={visitorCount} />
    </div>
  );
}