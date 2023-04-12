import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { UilHeart } from "@iconscout/react-unicons";
import "./Post.css";

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="" />

      <div className="postReact">
        {data.liked ? (
          <UilHeart size="35" style={{ marginTop: "-5px", color: 'red' }} />
        ) : (
          <img src={NotLike} alt="likePng" />
        )}
        {/* <img src={data.liked ? Heart : NotLike} alt="likePng" /> */}
        <img src={Comment} alt="commentsPng" />
        <img src={Share} alt="SharePng" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "15px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
