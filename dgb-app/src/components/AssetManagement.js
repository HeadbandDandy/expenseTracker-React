import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AssetManagement = ({ asset }) => {

    const {deleteAsset} = useContext(GlobalContext);

    //gets the amount
    const sign = asset.amount < 0 ? '-' : '+';

  return (
    <li className={asset.amount < 0 ? 'minus' : 'plus'}>
    {asset.text} <span> {sign}${Math.abs(asset.amount)}</span><button 
    onClick={() => deleteAsset(asset.id)}className='delete-btn'>x</button>
  </li>
  )
}