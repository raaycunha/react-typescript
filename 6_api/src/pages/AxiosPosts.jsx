import { useState, useEffect } from 'react'
import axios from 'axios'

const AxiosPosts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    const axiosPosts = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(response.data)
        setError('')
      } catch (err) {
        setError(err.message)
      }
    }
    axiosPosts()
    return () => {}
  },[posts])
  return (
    <div>
      <h1>Posts (Axios API)</h1>
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

export default AxiosPosts
