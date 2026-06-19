import {useState, useEffect} from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const idInterval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(idInterval)
  }, [])
  return (
    <div>
      <h1>Timer: {seconds} segundos.</h1>
    </div>
  )
}

export default Timer