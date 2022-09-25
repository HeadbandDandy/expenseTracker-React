import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AssetTracker = () => {
    //below posts asset depreciation/appreciation from global state
    const {assets} = useContext(GlobalContext);

    const amounts = assets.map(asset => asset.amount);


    const appreciation = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

const depreciation = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1
).toFixed(2);


    return (
      <>   
       <div className="inc-exp-container">
      <div>
        <h4>Appreciating-Assets</h4>
        <p className="asset plus">{appreciation}</p>
      </div>
      <div>
        <h4>Depreciating-Assets</h4>
        <p className="asset minus">{depreciation}</p>
      </div>
    </div>
    </>
    )
  }