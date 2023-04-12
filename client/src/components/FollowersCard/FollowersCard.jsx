import { Followers } from "../../Data/FollowersData";
import "./FollowersCard.css";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you?</h3>

      {Followers.map((follower, id) => (
        <div className="follower">
          <div>
            <img
              src={follower.img}
              alt="followerImg"
              className="followerImage"
            />
            <div className="followerName">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className="button fc-button">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
