import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const usePost = () => {
  const [postList, setPostList] = useState(() => {
    const data = localStorage.getItem('posts')
    return data ? JSON.parse(data) : []
  })
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postList))
  }, [postList])
  const handleAddPost = (textPost) => {
    const newPost = {
      id: crypto.randomUUID(),
      text: textPost
    }
    setPostList((currentPosts) => [...currentPosts, newPost])
  }
  const [postEdit, setPostEdit] = useState(null)
  const handleStartEdit = (postEdit) => {
    setPostEdit(postEdit)
  }
  const handleSaveEdit = (id, post) => {
    setPostList(postList.map(item =>
      item.id === id ? { ...item, text: post } : item
    ))
    setPostEdit(null)
  }
  const handleDelete = (id) => {
    setPostList(postList.filter(item => item.id !== id))
  }
  return {
    postList,
    handleAddPost,
    handleStartEdit,
    handleSaveEdit,
    postEdit,
    handleDelete,
  }
}