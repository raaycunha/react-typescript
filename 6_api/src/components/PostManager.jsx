const PostManager = ({ allPost, startEdit, onDelete }) => {
  return (
    <section className='container-posts'>
      {allPost.map(post => (
        <div className='box-post' key={post.id}>
          <h3>{post.text}</h3>
          <div className='box-btn'>
            <button onClick={() => startEdit(post)}>Editar</button>
            <button onClick={() => onDelete(post.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </section>
  )
}

export default PostManager