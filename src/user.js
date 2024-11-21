import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import FontAwesome search icon

const users = [
  {
    name: "Lelah Nichols",
    location: "Troy, MI",
    tags: ["clothes", "stem"],
  },
  {
    name: "Jesus Weiss",
    location: "Fort Worth, TX",
    tags: ["headset", "gadget", "speed", "winter"],
  },
  {
    name: "Annie Rice",
    location: "Austin, TX",
    tags: ["road", "mountain", "trip", "earth", "nature"],
  },
  {
    name: "Robert Brower",
    location: "Cincinnati, OH",
    tags: ["maintenance", "gears", "frames", "repair"],
  },
  {
    name: "Amy Campbell",
    location: "Warrior, AL",
    tags: ["music", "disks"],
  },
  {
    name: "Anthony S. Morin",
    location: "Lyndhurst, NJ",
    tags: ["vintage", "electric"],
  },
];

const Users = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active user index

  return (
    <div className="users-container">
      <h1>Users</h1>
      <div className="tabs">
        <button>Reputation</button>
        <button className="active">New users</button>
        <button>Voters</button>
        <button>Editors</button>
        <button>Moderators</button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search users" />
        <FaSearch className="search-icon" /> {/* Add search icon */}
      </div>

      <div className="user-grid">
        {users.map((user, index) => (
          <div
            className={`user-card ${activeIndex === index ? "active" : ""}`} // Add 'active' class if the box is active
            key={index}
            onClick={() => setActiveIndex(index)} // Set the active user on click
          >
            <div className="user-image"></div>
            <h3>{user.name}</h3>
            <p>{user.location}</p>

            <div className="tags">
              {user.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
