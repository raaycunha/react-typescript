import { useState } from 'react'
import { usePost } from '../hooks/usePost'
import PostInput from '../components/PostInput'
import PostManager from '../components/PostManager'

const PostPage = () => {
  const { postList, handleAddPost, handleStartEdit, handleSaveEdit, postEdit, handleDelete } = usePost()
  return (
    <div className='container'>
      <PostInput 
        onAddPost={handleAddPost}
        postForEdit={postEdit}
        onSaveEdit={handleSaveEdit}
      />
      <PostManager 
        allPost={postList} 
        startEdit={handleStartEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default PostPage