import { useState, useEffect } from 'react'

const FetchPosts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
        setError('')
      } catch (err) {
        setError(err.message)
      }
    }
    fetchPosts()
    return () => {}
  },[])
  return (
    <div>
      <h1>Posts (Fetch API)</h1>
      {error ? (
        <p>Erro: {error}</p>
      ) : (
        posts.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        )))}
    </div>
  )
}

export default FetchPosts
