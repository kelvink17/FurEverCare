import React, { useState, useEffect } from "react";
import "./petcare.css";
import Footer from "./Footer";

const App = () => {
  // Add state for the visitor count
  const [visitorCount, setVisitorCount] = useState(0);

  // Existing pets state
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Max",
      species: "Dog",
      breed: "Golden Retriever",
      age: "3 years",
      weight: "65 lbs",
      vaccinations: {
        rabies: "up to date",
        dhpp: "up to date",
        bordetella: "up to date",
      },
      status: {
        vaccines: "✅ Vaccinations up to date",
        checkup: "📅 Next checkup: Nov 15, 2024",
        training: "🎯 Training progress: 85%",
      },
    },
    {
      id: 2,
      name: "Luna",
      species: "Cat",
      breed: "Persian Cat",
      age: "2 years",
      weight: "8 lbs",
      vaccinations: {
        rabies: "⚠️ Rabies due in 2 weeks",
        dhpp: "up to date",
        bordetella: "not applicable",
      },
      status: {
        vaccines: "⚠️ Rabies due in 2 weeks",
        checkup: "📅 Next checkup: Dec 1, 2024",
        training: "🎯 Training progress: 60%",
      },
    },
  ]);

  const [newPet, setNewPet] = useState({
    name: "",
    species: "Dog",
    breed: "",
    age: "",
    weight: "",
    vaccinations: {
      rabies: false,
      dhpp: false,
      bordetella: false,
    },
  });

  const [feedingResult, setFeedingResult] = useState(null);
  const [showResultBox, setShowResultBox] = useState(false);
  const [saveStatus, setSaveStatus] = useState({ message: "", type: "" });

  // Use a single useEffect hook for both scrolling and the visitor count
  useEffect(() => {
    // Scroll to top effect
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Visitor counter logic
    let currentCount = localStorage.getItem('visitorCount');

    if (currentCount === null) {
      currentCount = 1;
    } else {
      currentCount = parseInt(currentCount) + 1;
    }

    localStorage.setItem('visitorCount', currentCount);
    setVisitorCount(currentCount);

  }, []);

  const handleNewPetChange = (e) => {
    const { name, value, checked } = e.target;
    if (name in newPet.vaccinations) {
      setNewPet((prev) => ({
        ...prev,
        vaccinations: {
          ...prev.vaccinations,
          [name]: checked,
        },
      }));
    } else {
      setNewPet((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const savePetProfile = () => {
    if (newPet.name.trim() === "" || newPet.breed.trim() === "") {
      setSaveStatus({
        message: "Please fill out Pet Name and Breed fields.",
        type: "error",
      });
      setTimeout(() => setSaveStatus({ message: "", type: "" }), 3000);
      return;
    }

    const newPetData = {
      id: pets.length + 1,
      name: newPet.name,
      species: newPet.species,
      breed: newPet.breed,
      age: newPet.age,
      weight: newPet.weight,
      vaccinations: newPet.vaccinations,
      status: {
        vaccines:
          newPet.vaccinations.rabies &&
          newPet.vaccinations.dhpp &&
          newPet.vaccinations.bordetella
            ? "✅ Vaccinations up to date"
            : "⚠️ Vaccinations pending",
        checkup: "📅 Next checkup: TBD",
        training: "🎯 Training progress: 0%",
      },
    };
    setPets([...pets, newPetData]);
    setNewPet({
      name: "",
      species: "Dog",
      breed: "",
      age: "",
      weight: "",
      vaccinations: {
        rabies: false,
        dhpp: false,
        bordetella: false,
      },
    });
    setSaveStatus({
      message: "✅ Profile saved successfully!",
      type: "success",
    });
    setTimeout(() => setSaveStatus({ message: "", type: "" }), 3000);
    console.log("Saving pet profile... done!");
  };

  const calculateFeeding = () => {
    const petWeight = parseFloat(document.getElementById("petWeight").value);
    const activityLevel = document.getElementById("activityLevel").value;
    const ageGroup = document.getElementById("ageGroup").value;

    if (isNaN(petWeight) || petWeight <= 0) {
      alert("Please enter a valid weight.");
      return;
    }

    let baseCaloriesPerPound;
    if (ageGroup === "puppy") {
      baseCaloriesPerPound = 45;
    } else if (ageGroup === "adult") {
      baseCaloriesPerPound = 30;
    } else {
      baseCaloriesPerPound = 25;
    }

    let activityMultiplier;
    if (activityLevel === "low") {
      activityMultiplier = 1.2;
    } else if (activityLevel === "moderate") {
      activityMultiplier = 1.6;
    } else {
      activityMultiplier = 2.0;
    }

    const dailyCalories = petWeight * baseCaloriesPerPound * activityMultiplier;
    const cupsPerDay = (dailyCalories / 400).toFixed(2); // Assuming 400 calories per cup of food

    setFeedingResult(`${cupsPerDay} cups per day`);
    setShowResultBox(true);
  };

  const playVideo = (videoTitle) => {
    console.log(`Now playing video: ${videoTitle}`);
  };

  const playAudio = (audioTitle) => console.log("Playing audio: " + audioTitle);

  return (
    <div className="petcare-container">
      <div className="wrapper">
        <header className="site-header">
          <h1 className="main-logo">🐾 Furever Care</h1>
          <p className="tagline">
            Complete care management for your beloved pets
          </p>
          <div className="quick-nav-links">
            <a href="#profile" className="nav-btn">
              Pet Profile
            </a>
            <a href="#feeding" className="nav-btn">
              Feeding Guide
            </a>
            <a href="#grooming" className="nav-btn">
              Grooming
            </a>
            <a href="#health" className="nav-btn">
              Health Tips
            </a>
            <a href="#training" className="nav-btn">
              Training
            </a>
          </div>
        </header>

        <section id="profile" className="page-section">
          <div className="card-ui">
            <h2 className="section-heading">
              <span className="icon">📋</span>Pet Profile Management
            </h2>
            <div className="content-grid pet-prof-grid">
              <div className="profile-form-area">
                <h3 className="content-heading">Pet Information</h3>
                <form className="form-layout">
                  <div className="field-group-form">
                    <label className="field-label">Pet Name</label>
                    <input
                      type="text"
                      className="input-look"
                      placeholder="Enter pet name"
                      name="name"
                      value={newPet.name}
                      onChange={handleNewPetChange}
                    />
                  </div>
                  <div className="two-col-grid">
                    <div>
                      <label className="field-label">Species</label>
                      <select
                        className="input-look"
                        name="species"
                        value={newPet.species}
                        onChange={handleNewPetChange}
                      >
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Bird</option>
                        <option>Rabbit</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="field-label">Breed</label>
                      <input
                        type="text"
                        className="input-look"
                        placeholder="Enter breed"
                        name="breed"
                        value={newPet.breed}
                        onChange={handleNewPetChange}
                      />
                    </div>
                  </div>
                  <div className="two-col-grid">
                    <div>
                      <label className="field-label">Age</label>
                      <input
                        type="text"
                        className="input-look"
                        placeholder="e.g., 2 years"
                        name="age"
                        value={newPet.age}
                        onChange={handleNewPetChange}
                      />
                    </div>
                    <div>
                      <label className="field-label">Weight</label>
                      <input
                        type="text"
                        className="input-look"
                        placeholder="e.g., 15 lbs"
                        name="weight"
                        value={newPet.weight}
                        onChange={handleNewPetChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="field-label">Vaccination Status</label>
                    <div className="check-list-box">
                      <label className="check-item-box">
                        <input
                          type="checkbox"
                          className="check-input-mark"
                          name="rabies"
                          checked={newPet.vaccinations.rabies}
                          onChange={handleNewPetChange}
                        />
                        <span>Rabies</span>
                      </label>
                      <label className="check-item-box">
                        <input
                          type="checkbox"
                          className="check-input-mark"
                          name="dhpp"
                          checked={newPet.vaccinations.dhpp}
                          onChange={handleNewPetChange}
                        />
                        <span>DHPP</span>
                      </label>
                      <label className="check-item-box">
                        <input
                          type="checkbox"
                          className="check-input-mark"
                          name="bordetella"
                          checked={newPet.vaccinations.bordetella}
                          onChange={handleNewPetChange}
                        />
                        <span>Bordetella</span>
                      </label>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={savePetProfile}
                    className="main-btn form-btn"
                  >
                    Save Profile
                  </button>
                  {saveStatus.message && (
                    <div className={`save-status-box ${saveStatus.type}`}>
                      {saveStatus.message}
                    </div>
                  )}
                </form>
              </div>

              <div className="pet-display-area">
                <h3 className="content-heading">Current Pets</h3>
                <div className="pet-list-container">
                  {pets.map((pet) => (
                    <div className="pet-card" key={pet.id}>
                      <div className="pet-summary">
                        <span className="pet-icon">
                          {pet.species === "Dog" ? "🐕" : "🐱"}
                        </span>
                        <div>
                          <h4 className="pet-name">{pet.name}</h4>
                          <p className="pet-desc">
                            {pet.breed} • {pet.age} • {pet.weight}
                          </p>
                        </div>
                      </div>
                      <div className="pet-stats-list">
                        <p className="stat-item">
                          <span
                            className={
                              pet.status.vaccines.includes("✅")
                                ? "status-icon-ok"
                                : "status-icon-warn"
                            }
                          >
                            {pet.status.vaccines.includes("✅") ? "✅" : "⚠️"}
                          </span>
                          {pet.status.vaccines}
                        </p>
                        <p className="stat-item">
                          <span className="status-icon-date">📅</span>
                          {pet.status.checkup}
                        </p>
                        <p className="stat-item">
                          <span className="status-icon-progress">🎯</span>
                          {pet.status.training}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section id="feeding" className="page-section">
          <div className="card-ui">
            <h2 className="section-heading">
              <span className="icon">🍽️</span>Feeding Guidelines
            </h2>
            <div className="feeding-col-grid">
              <div className="chart-card puppy-chart-look">
                <h3 className="content-heading">
                  <span className="icon">🐶</span>Puppy Feeding Chart
                </h3>
                <div className="chart-item-list">
                  <div className="chart-item-each">
                    <div className="period">6-12 weeks</div>
                    <div className="details">
                      4 meals/day • ¼-½ cup per meal
                    </div>
                    <div className="tip">High-protein puppy formula</div>
                  </div>
                  <div className="chart-item-each">
                    <div className="period">3-6 months</div>
                    <div className="details">
                      3 meals/day • ½-1 cup per meal
                    </div>
                    <div className="tip">Continue puppy formula</div>
                  </div>
                  <div className="chart-item-each">
                    <div className="period">6-12 months</div>
                    <div className="details">
                      2 meals/day • 1-1½ cups per meal
                    </div>
                    <div className="tip">Transition to adult food</div>
                  </div>
                </div>
                <div className="info-box-sm">
                  <span className="info-icon">💡</span>
                  <span>
                    Always use high-quality puppy food for proper development
                    and growth
                  </span>
                </div>
              </div>

              <div className="chart-card adult-chart-look">
                <h3 className="content-heading">
                  <span className="icon">🐕</span>Adult Dog Chart
                </h3>
                <div className="chart-item-list">
                  <div className="chart-item-each">
                    <div className="period">Small (5-20 lbs)</div>
                    <div className="details">2 meals/day • ½-1¼ cups total</div>
                    <div className="tip">Higher calorie density needed</div>
                  </div>
                  <div className="chart-item-each">
                    <div className="period">Medium (20-60 lbs)</div>
                    <div className="details">
                      2 meals/day • 1¼-2¾ cups total
                    </div>
                    <div className="tip">Standard adult formula</div>
                  </div>
                  <div className="chart-item-each">
                    <div className="period">Large (60+ lbs)</div>
                    <div className="details">
                      2 meals/day • 2¾-4+ cups total
                    </div>
                    <div className="tip">Large breed formula recommended</div>
                  </div>
                </div>
                <div className="info-box-sm">
                  <span className="info-icon">💡</span>
                  <span>
                    Adjust portions based on activity level and body condition
                    score
                  </span>
                </div>
              </div>

              <div className="chart-card cat-chart-look">
                <h3 className="content-heading">
                  <span className="icon">🐱</span>Cat Feeding Chart
                </h3>
                <div className="chart-item-list">
                  <div className="chart-item-each">
                    <div className="period">Kitten (2-12 months)</div>
                    <div className="details">
                      3-4 meals/day • ¼-½ cup per meal
                    </div>
                    <div className="tip">Kitten formula essential</div>
                  </div>
                  <div className="chart-item-each">
                    <div className="period">Adult (1-7 years)</div>
                    <div className="details">
                      2 meals/day • ¼-½ cup per meal
                    </div>
                    <div className="tip">Maintain ideal weight</div>
                  </div>
                  <div className="chart-item-each">
                    <div className="period">Senior (7+ years)</div>
                    <div className="details">
                      2 meals/day • Adjust for health needs
                    </div>
                    <div className="tip">Senior formula recommended</div>
                  </div>
                </div>
                <div className="info-box-sm">
                  <span className="info-icon">💡</span>
                  <span>
                    Cats prefer multiple small meals throughout the day
                  </span>
                </div>
              </div>
            </div>
            <div className="calc-section-area">
              <h3 className="content-heading">
                Interactive Feeding Calculator
              </h3>
              <div className="calc-grid-layout">
                <div>
                  <label className="field-label">Pet Weight (lbs)</label>
                  <input
                    type="number"
                    id="petWeight"
                    className="input-look"
                    placeholder="Enter weight"
                  />
                </div>
                <div>
                  <label className="field-label">Activity Level</label>
                  <select id="activityLevel" className="input-look">
                    <option value="low">Low Activity</option>
                    <option value="moderate">Moderate Activity</option>
                    <option value="high">High Activity</option>
                  </select>
                </div>
                <div>
                  <label className="field-label">Age Group</label>
                  <select id="ageGroup" className="input-look">
                    <option value="puppy">Puppy/Kitten</option>
                    <option value="adult">Adult</option>
                    <option value="senior">Senior</option>
                  </select>
                </div>
                <div className="btn-group-calc">
                  <button onClick={calculateFeeding} className="main-btn">
                    Calculate
                  </button>
                </div>
              </div>
              <div
                id="feedingResult"
                className={`result-box ${showResultBox ? "show" : ""}`}
              >
                <h4 className="result-heading">Recommended Daily Feeding:</h4>
                <p id="feedingAmount" className="result-text">
                  {feedingResult}
                </p>
                <p className="result-tip">
                  Remember to divide this amount into 2-3 meals throughout the
                  day
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section id="grooming" className="page-section">
          <div className="card-ui">
            <h2 className="section-heading">
              <span className="icon">✂️</span>Grooming Video Guides
            </h2>
            <div className="media-grid-g">
              <div className="media-cat-card">
                <h3 className="content-heading">
                  <span className="icon">🪮</span>Brushing Techniques
                </h3>
                <div className="video-list-sec">
                  <div className="video-card-one">
                    <div className="video-thumb-g"></div>
                    <div className="video-info-s">
                      <h4 className="video-title">
                        Daily Brushing for Long-Haired Dogs
                      </h4>
                      <p className="video-desc">
                        Learn proper brushing techniques to prevent matting and
                        reduce shedding
                      </p>
                      <button
                        onClick={() =>
                          playVideo("Daily Brushing for Long-Haired Dogs")
                        }
                        className="main-btn play-btn"
                      >
                        ▶ Watch Video
                      </button>
                    </div>
                  </div>
                  <div className="video-card-one">
                    <div className="video-thumb-g"></div>
                    <div className="video-info-s">
                      <h4 className="video-title">Cat Brushing Basics</h4>
                      <p className="video-desc">
                        Gentle techniques for brushing sensitive cats without
                        stress
                      </p>
                      <button
                        onClick={() => playVideo("Cat Brushing Basics")}
                        className="main-btn play-btn"
                      >
                        ▶ Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-cat-card">
                <h3 className="content-heading">
                  <span className="icon">🛁</span>Bathing Guide
                </h3>
                <div className="video-list-sec">
                  <div className="video-card-one">
                    <div className="video-thumb-g"></div>
                    <div className="video-info-s">
                      <h4 className="video-title">Safe Dog Bathing Steps</h4>
                      <p className="video-desc">
                        Complete bathing process from preparation to drying
                      </p>
                      <button
                        onClick={() => playVideo("Safe Dog Bathing Steps")}
                        className="main-btn play-btn"
                      >
                        ▶ Watch Video
                      </button>
                    </div>
                  </div>
                  <div className="video-card-one">
                    <div className="video-thumb-g"></div>
                    <div className="video-info-s">
                      <h4 className="video-title">Waterless Cat Cleaning</h4>
                      <p className="video-desc">
                        Alternative cleaning methods for cats who hate water
                      </p>
                      <button
                        onClick={() => playVideo("Waterless Cat Cleaning")}
                        className="main-btn play-btn"
                      >
                        ▶ Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media-cat-card">
                <h3 className="content-heading">
                  <span className="icon">✂️</span>Trimming & Clipping
                </h3>
                <div className="video-list-sec">
                  <div className="video-card-one">
                    <div className="video-thumb-g"></div>
                    <div className="video-info-s">
                      <h4 className="video-title">Nail Trimming Safety</h4>
                      <p className="video-desc">
                        How to safely trim your pet's nails without injury
                      </p>
                      <button
                        onClick={() => playVideo("Nail Trimming Safety")}
                        className="main-btn play-btn"
                      >
                        ▶ Watch Video
                      </button>
                    </div>
                  </div>
                  <div className="video-card-one">
                    <div className="video-thumb-g"></div>
                    <div className="video-info-s">
                      <h4 className="video-title">Basic Hair Trimming</h4>
                      <p className="video-desc">
                        Simple trimming techniques for home grooming
                      </p>
                      <button
                        onClick={() => playVideo("Basic Hair Trimming")}
                        className="main-btn play-btn"
                      >
                        ▶ Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="schedule-box">
              <h3 className="content-heading">
                Grooming Schedule Recommendations
              </h3>
              <div className="two-col-grid">
                <div className="schedule-card-s">
                  <h4 className="sub-heading-icon-s">
                    <span className="icon">🐕</span>Dogs
                  </h4>
                  <ul className="schedule-list-s">
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Brushing:</strong> Daily (long-haired),
                        2-3x/week (short-haired)
                        <p className="list-desc-s">
                          Prevents matting and reduces shedding
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Bathing:</strong> Every 4-6 weeks or as needed
                        <p className="list-desc-s">
                          More frequent if very active or dirty
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Nail Trimming:</strong> Every 2-3 weeks
                        <p className="list-desc-s">
                          Watch for clicking sounds on floors
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Ear Cleaning:</strong> Weekly
                        <p className="list-desc-s">
                          Check for odor, discharge, or redness
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Professional Grooming:</strong> Every 6-8 weeks
                        <p className="list-desc-s">
                          Varies by breed and coat type
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="schedule-card-s">
                  <h4 className="sub-heading-icon-s">
                    <span className="icon">🐱</span>Cats
                  </h4>
                  <ul className="schedule-list-s">
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Brushing:</strong> Daily (long-haired), 2x/week
                        (short-haired)
                        <p className="list-desc-s">
                          Helps with hairball prevention
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Bathing:</strong> Rarely needed (self-grooming)
                        <p className="list-desc-s">
                          Only when very dirty or medical need
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Nail Trimming:</strong> Every 2-3 weeks
                        <p className="list-desc-s">
                          Front claws grow faster than back
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Ear Cleaning:</strong> Monthly or as needed
                        <p className="list-desc-s">
                          Indoor cats need less frequent cleaning
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="dot-s">•</span>
                      <div>
                        <strong>Professional Grooming:</strong> 2-3 times per
                        year
                        <p className="list-desc-s">
                          Mainly for long-haired breeds
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section id="health" className="page-section">
          <div className="card-ui">
            <h2 className="section-heading">
              <span className="icon">🏥</span>Health Tips & Care
            </h2>
            <div className="content-grid-half-h">
              <div className="health-section-l">
                <h3 className="content-heading">
                  <span className="icon">🎧</span>Audio Health Guides
                </h3>
                <div className="audio-list-h">
                  <div className="audio-card-h">
                    <div className="audio-thumb-h"></div>
                    <div className="audio-info-h">
                      <h4 className="audio-title">Daily Health Monitoring</h4>
                      <p className="audio-desc">
                        Learn what to watch for in your pet's daily behavior and
                        physical condition
                      </p>
                      <button
                        onClick={() => playAudio("Daily Health Monitoring")}
                        className="main-btn play-btn"
                      >
                        🎵 Play Audio Guide
                      </button>
                    </div>
                  </div>
                  <div className="audio-card-h">
                    <div className="audio-thumb-h"></div>
                    <div className="audio-info-h">
                      <h4 className="audio-title">Emergency First Aid</h4>
                      <p className="audio-desc">
                        Essential first aid steps every pet owner should know
                        for emergencies
                      </p>
                      <button
                        onClick={() => playAudio("Emergency First Aid")}
                        className="main-btn play-btn"
                      >
                        🎵 Play Audio Guide
                      </button>
                    </div>
                  </div>
                  <div className="audio-card-h">
                    <div className="audio-thumb-h"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer visitorCount={visitorCount} />
    </div>
  );
};

export default App;