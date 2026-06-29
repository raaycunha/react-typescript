import { useState, useEffect } from "react"

const PostInput = ({ onAddPost, postForEdit, onSaveEdit }) => {
  const [textPost, setTextPost] = useState('')
  useEffect(() => {
    if (postForEdit) setTextPost(postForEdit.text)
    else setTextPost('')
  }, [postForEdit])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!textPost.trim()) return
    postForEdit ? onSaveEdit(postForEdit.id, textPost) : onAddPost(textPost)
    setTextPost('')
  }
  return (
    <section className="container-form">
      <form id="frm" onSubmit={handleSubmit}>
        <h1>Gerenciar Postagens</h1>
        <div className="box-input">
          <input
            type="text"
            id="textPost"
            placeholder="Digite sua postagem..."
            title="Digite seu post"
            required
            minLength={1}
            onChange={(e) => setTextPost(e.target.value)}
            value={textPost}
          />
          <button className="btn-frm" type="submit">{postForEdit ? 'Salvar Edição' : 'Postar'}</button>
        </div>
      </form>
    </section>
  )
}

export default PostInput