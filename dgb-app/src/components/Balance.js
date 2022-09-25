import React, {useContext}  from 'react'
import { GlobalContext } from '../context/GlobalState'

//below contains the balance and pulls data and information from global state
export const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>    
    <h4>Your Balance</h4>
    <h1 >${total}</h1>
    </>
  )
}
