import React from 'react'
import FilhoFuncao from './FilhoFuncao'

const PaiFuncao = () => {
    const clickButton = () => {
        console.log('Clicou no botão elemento filho!')
    }
  return (
    <div>
      <FilhoFuncao clickBtn={clickButton} />
    </div>
  )
}

export default PaiFuncao
