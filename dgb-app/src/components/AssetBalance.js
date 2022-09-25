import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AssetBalance = () => {
    const { assets } = useContext(GlobalContext);


    const amounts = assets.map(asset => asset.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
     <h4>Asset Balance</h4>
      <h1 >${total}</h1>
    </>
  )
}
