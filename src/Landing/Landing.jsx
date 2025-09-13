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
  const [petName, setPetName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (file) setVetImage(URL.createObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!name || !role) {
      setErrorMessage("Please enter your name and select a role.");
      return;
    }
    setUser({ name, role, specialization, contact, vetImage, petName });
    navigate(`/${role}`);
  };

  return (
    <div className="the-void">
      <form className="the-form-of-all-forms" onSubmit={handleSubmit}>
        <div className="the-logo-that-shines">
          <img src="/Furever Logo.jpg" alt="FurEver Care Logo" />
          <span className="logo-words-of-power">FurEver Care</span>
        </div>

        {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}

        <div className="the-section-of-truth">
          <label className="label-of-destiny" htmlFor="nameInput">
            Name
          </label>
          <input
            id="nameInput"
            type="text"
            className="the-name-grabber"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="the-section-of-truth">
          <label className="category-whisperer">Select your category</label>
          <div className="the-role-choosers">
            <label
              className={`role-card-of-fate ${role === "owner" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value="about"
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="the-icon-of-power">👤</span>
              <span className="the-words-of-label">Pet Owner</span>
            </label>

            <label className={`role-card-of-fate ${role === "vet" ? "selected" : ""}`}>
              <input
                type="radio"
                name="role"
                value="vet"
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="the-icon-of-power">🩺</span>
              <span className="the-words-of-label">Veterinarian</span>
            </label>

            <label
              className={`role-card-of-fate ${role === "shelter" ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="role"
                value="shelter"
                onChange={(e) => setRole(e.target.value)}
              />
              <span className="the-icon-of-power">🏠</span>
              <span className="the-words-of-label">Animal Shelter</span>
            </label>
          </div>
        </div>

        {role === "about" && (
          <div>
            <input
              type="text"
              className="the-special-input"
              placeholder="Enter Pet Name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </div>
        )}

        {role === "vet" && (
          <div className="the-vet-secrets">
            <input
              type="text"
              className="the-special-input"
              placeholder="Specialization (e.g., Small Animals, Surgery)"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
            <input
              type="text"
              className="the-special-input"
              placeholder="Contact Info (Phone/Email)"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <div className="the-photo-uploader">
              <label className="the-photo-label">Profile Photo (Optional)</label>
              <label className="the-button-of-upload">
                📎 Choose Photo
                <input type="file" accept="image/*" onChange={handleImage} />
              </label>
            </div>
            {vetImage && (
              <img
                src={vetImage || "/placeholder.svg"}
                alt="Vet Preview"
                className="the-preview-of-faces"
              />
            )}
          </div>
        )}

        <button type="submit" className="the-button-of-submission">
          Enter
        </button>
      </form>
    </div>
  );
}