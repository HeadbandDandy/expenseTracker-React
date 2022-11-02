import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AssetBalance = () => {
    const { assets } = useContext(GlobalContext);


    const assetAmounts = assets.map(asset => asset.amount);
    const assetTotal = assetAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
     <h4>Asset Balance</h4>
      <h1 >${assetTotal}</h1>
    </>
  )
}
