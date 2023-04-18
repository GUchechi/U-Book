import { useState } from "react";
import { Link } from "react-router-dom";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilEstate } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import "./RightSide.css";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <Link to={"../home"}>
          <UilEstate size="26.5" />
        </Link>
        <UilSetting size="26.5" />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>

      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
