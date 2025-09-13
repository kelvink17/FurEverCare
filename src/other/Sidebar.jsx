"use client";

import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem("isSidebarOpen");
    return savedState === "false"; 
  });

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", isSidebarOpen);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryClick = (role, path) => {
    if (!user || user.role !== role) {
      navigate("/", { state: { requiredRole: role } });
    } else {
      navigate(path);
    }
  };
 
  const roleLinks = {
    about: [
      { to: "/about", label: "About Us", icon: "fa-circle-info" },
      { to: "/petcare", label: "PetCare Sections", icon: "fa-clipboard-list" },
      {
        to: "/product",
        label: "Pet Product Showcase",
        icon: "fa-bag-shopping",
      },
      {
        to: "/emergency",
        label: "Emergency and Vet Help",
        icon: "fa-truck-medical",
      },
      { to: "/feedback", label: "Feedback Page", icon: "fa-comment-dots" },
      { to: "/contact", label: "Contact Us", icon: "fa-envelope" },
    ],
    vet: [
      { to: "/vet", label: "Profile", icon: "fa-user-circle" },
      {
        to: "/vet",
        label: "Appointments",
        icon: "fa-calendar-check",
      },
      { to: "/vet", label: "Clients", icon: "fa-users" },
    ],
    shelter: [
      { to: "/shelter", label: "About Shelter", icon: "fa-house-chimney" },
      {
        to: "/shelter/#available-animals",
        label: "Available Animals",
        icon: "fa-gear",
      },
      {
        to: "/shelter/#events",
        label: "Upcoming Events",
        icon: "fa-calendar-day",
      },
      { to: "/shelter/#ss", label: "Success Stories", icon: "fa-trophy" },
      { to: "/shelter/#gi", label: "Get Involved", icon: "fa-handshake" },
      { to: "/contact/#view-map", label: "Location", icon: "fa-location-dot" },
    ],
  };

  const linksToShow = user ? roleLinks[user.role] : [];

  return (
    <div className="sb">
      <div>
        <div
          className={`sidebar-toggle ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <img src="/Furever Logo.jpg" alt="logo" />
            <h2>FurEver Care</h2>
          </div>

          <ul className="sidebar-links">
            {user ? (
              <div>
                <h4>
                  <span>
                    {user.role === "about"
                      ? "Pet Owner"
                      : user.role === "vet"
                      ? "Veterinarian"
                      : "Animal Shelter"}
                  </span>
                  <div className="menu-seperator"></div>
                </h4>

                {linksToShow.map((link) => (
                  <li
                    key={link.to}
                    onClick={() => handleCategoryClick(user.role, link.to)}
                  >
                    <Link to={link.to}>
                      <span className="material-symbols-outlined">
                        <i className={`fa-solid ${link.icon}`}></i>
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </div>
            ) : (
              <div>
                <h4>
                  <span>Select a Role</span>
                  <div className="menu-seperator"></div>
                </h4>
                <li onClick={() => handleCategoryClick("about", "/about")}>
                  <span className="material-symbols-outlined">
                    <i className="fa-solid fa-dog"></i>
                  </span>
                  Pet Owner
                </li>
                <li onClick={() => handleCategoryClick("vet", "/")}>
                  <span className="material-symbols-outlined">
                    <i className="fa-solid fa-stethoscope"></i>
                  </span>
                  Veterinarian
                </li>
                <li onClick={() => handleCategoryClick("shelter", "/")}>
                  <span className="material-symbols-outlined">
                    <i className="fa-solid fa-house"></i>
                  </span>
                  Animal Shelter
                </li>
              </div>
            )}
          </ul>
           {user && (
              <div className="user-account">
                <div className="user-profile">
                  <div className="user-detail">
                    <h3>{user.name}</h3>
                    <span>{user.specialization || user.role}</span>
                  </div>
                </div>
                <div>
                  <a href="/">
                    <span className="material-symbols-outlined">
                      <i className="fas fa-sign-out-alt"></i>
                    </span>
                    Logout
                  </a>
                </div>
              </div>
            )}
        </aside>
      </div>
    </div>
  );
}
