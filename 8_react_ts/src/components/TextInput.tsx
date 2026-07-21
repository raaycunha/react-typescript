import { useState } from "react"

const TextInput = () => {
  const [text, setText] = useState<string>('')
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder="Digite algum texto.." 
      value={text} 
      onChange={handleChange} />
      <p>{text}</p>
    </form>
  )
}

export default TextInput
