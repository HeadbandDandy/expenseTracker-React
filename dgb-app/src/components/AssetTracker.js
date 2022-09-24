import React from 'react'

export const AssetTracker = () => {
    return (
      <>   
       <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="asset plus">+$0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="asset minus">-$0.00</p>
      </div>
    </div>
    </>
    )
  }