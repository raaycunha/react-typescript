import { useEffect } from 'react'

const Toast = ({ message, type, onClose }) => {
  const getIcon = () => {
    if (type === 'red') return '❗'
    else return '✅'
  }
  return (
    <div className='toast-container'>
      <div className='toast-content'>
        <span className='toast-icon'>{getIcon()}</span>
        <p className='toast-text'>{message}</p>
        <span className='toast-close' onClick={() => onClose()}>&times;</span>
      </div>
      <div className={`toast-progress ${type}`}></div>
    </div>
  )
}

export default Toast
