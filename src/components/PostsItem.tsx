import { PostType } from "../types/Types"

const PostsItem = ({id, title, body, onDelete}: PostType) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => onDelete(id)}>Delete Post</button>
    </li>
  )
}

export default PostsItem