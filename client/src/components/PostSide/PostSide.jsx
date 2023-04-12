import Post from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'

const PostSide = () => {
  return (
    <div className='postSide'>
        <PostShare />
        <Post />
    </div>
  )
}

export default PostSide