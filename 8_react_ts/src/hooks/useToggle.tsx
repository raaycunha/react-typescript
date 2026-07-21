import { useEffect, useState } from "react"

const useToggle = () => {
  const [show, setShow] = useState<boolean>(() => {
    const data = localStorage.getItem('toggle')
    return data ? JSON.parse(data) : false
  })
  useEffect(() => {
    localStorage.setItem('toggle', JSON.stringify(show))
  }, [show])
  const toggle = () => {
    setShow((prev) => !prev)
  }
  return [show, toggle] as const;
}

export default useToggle