import { useState, useEffect } from 'react'
import PostsItem from './PostsItem'
import { PostType } from '../types/Types'

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  const onDelete = (id: number) => {
    console.log("DELETED: ", id)
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <PostsItem key={post.id} id={post.id} title={post.title} body={post.body} userId={post.userId} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  )
}

export default Posts