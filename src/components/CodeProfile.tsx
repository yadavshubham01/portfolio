import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/CodingProfiles.scss";

function CodingProfiles() {
  const profiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/shubham_yadav_1/",
      icon: "https://leetcode.com/static/images/LeetCode_logo.png",
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/yadavshubham4062",
      icon: "https://sta.codeforces.com/s/65478/images/codeforces-logo-with-telegram.png",
    },
    {
        name: "GFG",
        url:"https://www.geeksforgeeks.org/user/yadavshubywh0/",
        icon:"https://media.geeksforgeeks.org/gfg-gg-logo.svg"
    },
    // You can add more (HackerRank, GitHub, etc.)
  ];

  return (
    <div id="coding-profiles" className="coding-profiles">
      <h1>
        <FontAwesomeIcon icon={faCode as any} /> Coding Profiles
      </h1>
      <div className="profiles-grid">
        {profiles.map((profile, idx) => (
          <a
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
          >
            <img src={profile.icon} alt={profile.name} />
            <span>{profile.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CodingProfiles;
