import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { AssetManagement } from './AssetManagement'


export const AssetHistory = () => {
    const {assets} = useContext(GlobalContext);
  
  console.log(assets)
    return (
      <>
          <h3>Transaction History</h3>
        <ul className="list">
          {assets.map(asset => (<AssetManagement key={asset.id} asset=
          {asset} />))}
        </ul>
      </>
    )
  }