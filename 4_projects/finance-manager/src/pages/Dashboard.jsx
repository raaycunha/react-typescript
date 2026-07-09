import React from 'react'
import { useFinanceContext } from '../context/FinanceContext'

const Dashboard = () => {
  const {
    financeList,
    moneyUser,
    valueIn,
    valueOut,
  } = useFinanceContext()
  const porcent = valueIn > 0 ? (valueOut / valueIn) * 100 : 0
  const porcentLimited = Math.min(Math.max(porcent, 0), 100);
  return (
    <div className='container-finance'>
      <section className={`finance-summary ${moneyUser < 0 ? 'negative' : 'positive'}`}>
        <div className="box-value in">
          <h3>Quantia que entrou</h3>
          <span>{valueIn ? valueIn.toLocaleString('pt-BR', {
            style: 'currency', currency: 'BRL'
          }) : 'Não entrou nenhum valor.'}</span>
        </div>
        <div className="box-value out">
          <h3>Quantia que saiu</h3>
          <span>{valueOut ? valueOut.toLocaleString('pt-BR', {
            style: 'currency', currency: 'BRL'
          }) : 'Não saiu nenhum valor.'}</span>
        </div>
        <div className="box-value total">
          <h3>Quantia total</h3>
          <span>{moneyUser.toLocaleString('pt-BR', {
            style: 'currency', currency: 'BRL'
          }) }</span>
        </div>
      </section>
      <section className="container-graphic">
        <h3>Proporção entre o que entrou e o que saiu: {porcentLimited.toFixed(2)}%</h3>
        <div className="graphic-progress">
          <div className={`progress-color ${porcentLimited > 50 ? 'negative' : 'positive'}`} 
          style={{ '--progress': `${porcentLimited}%` }}>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard