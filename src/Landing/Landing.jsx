import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Landing.css";
import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function Landing() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [contact, setContact] = useState("");
  const [vetImage, setVetImage] = useState(null);

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file) setVetImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role) {
      alert("Please enter your name and select a role.");
      return;
    }

    setUser({ name, role, specialization, contact, vetImage });
    navigate(`/${role}`);
  };

  return (
    <div className="main">
      <form className="landing-form" onSubmit={handleSubmit}>
        <div className="logo">
          <img src="/Furever Logo.jpg" alt="FurEver Care Logo" />
          <span className="logo-text">FurEver Care</span>
        </div>

        <div className="form-section">
          <label className="input-label" htmlFor="nameInput">
            Name
          </label>
          <input
            id="nameInput"
            type="text"
            className="name-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label className="section-label">Select your category</label>

          <div className="role-select">
            <label
              className={`role-option ${role === "owner" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value="about"
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="role-icon">👤</span>
              <span className="role-text">Pet Owner</span>
            </label>

            <label
              className={`role-option ${role === "vet" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value="vet"
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="role-icon">🩺</span>
              <span className="role-text">Veterinarian</span>
            </label>

            <label
              className={`role-option ${role === "shelter" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value="shelter"
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="role-icon">🏠</span>
              <span className="role-text">Animal Shelter</span>
            </label>
          </div>
        </div>

        {role === "vet" && (
          <div className="vet-extra">
            <input
              type="text"
              className="extra-input"
              placeholder="Specialization (e.g., Small Animals, Surgery)"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
            <input
              type="text"
              className="extra-input"
              placeholder="Contact Info (Phone/Email)"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <div className="file-upload-section">
              <label className="file-label">Profile Photo (Optional)</label>
              <label className="file-upload-btn">
                📎 Choose Photo
                <input type="file" accept="image/*" onChange={handleImage} />
              </label>
            </div>
            {vetImage && (
              <img
                src={vetImage || "/placeholder.svg"}
                alt="Vet Preview"
                className="vet-preview"
              />
            )}
          </div>
        )}

        <button type="submit" className="submit-btn">
          Enter
        </button>
      </form>
    </div>
  );
}
