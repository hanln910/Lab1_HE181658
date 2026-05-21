import { useState } from "react";
import avatar from "./assets/avatar.jpg";
import "./App.css";

const infor = {
  fullName: "Nguyen Le Ngoc Ha",
  id: "HE181658",
  class: "SE2004_NJ",
  major: "Software Engineering",
  hobbies: ["gaming", "shopping"]
};

function App() {
  const [isOnline, setIsOnline] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleStatus = () => setIsOnline(!isOnline);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleLike = () => setLikes(likes + 1);

  return (
    <div className={isDarkMode ? "app dark" : "app"}>
      <div className="card">

        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>

        <h1>{infor.fullName}</h1>

        <p>ID: {infor.id}</p>

        <p>Class Name: {infor.class}</p>

        <p>Major: {infor.major}</p>

        <div className="hobbies">
          <h3>Hobbies:</h3>

          {infor.hobbies.map((hobby, index) => (
            <p key={index}>{hobby}</p>
          ))}
        </div>

        <div className="status-button">
          <p>
            Status:
            <span
              className={
                isOnline
                  ? "status-online"
                  : "status-offline"
              }
            >
              {isOnline ? " Online" : " Offline"}
            </span>
          </p>

          <button
            className="action-btn"
            onClick={toggleStatus}
          >
            Change Status
          </button>
        </div>

        <div className="theme-section">
          <button
            className="action-btn"
            onClick={toggleTheme}
          >
            {isDarkMode
              ? "Light Mode"
              : "Dark Mode"}
          </button>
        </div>

        <div className="like-section">
          <p>Total Likes: {likes}</p>

          <button
            className="action-btn"
            onClick={handleLike}
          >
            Like 👍
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;