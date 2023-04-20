import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from "../../actions/postAction";
import Post from "../Post/Post";
import {useParams} from 'react-router-dom'
import "./Posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  const params = useParams()

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if(!posts) return "No Posts"
  if(params.id) posts = posts.filter((post) => post.userId === params.id)

  return (
    <div className="posts">
      {loading
        ? "Fetching Posts..."
        : posts.map((post, id) => {
            return <Post data={post} id={id} />;
          })}
    </div>
  );
};

export default Posts;
