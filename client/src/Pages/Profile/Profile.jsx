import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile__center">
        <ProfileCard location="profilePage"/>
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
