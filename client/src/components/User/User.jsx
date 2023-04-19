import React from "react";

const User = ({ person }) => {
  return (
    <div className="follower">
      <div>
        <img src={person.img} alt="followerImg" className="followerImage" />
        <div className="followerName">
          <span>{person.name}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className="button fc-button">Follow</button>
    </div>
  );
};

export default User;
