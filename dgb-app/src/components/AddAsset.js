import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddAsset = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


    const { addAsset } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
  
      const newAsset = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addAsset(newAsset);
    }


  return (
    <>    <h3>Manage Your Asset </h3>
    <form onSubmit={onSubmit}>
        <div className="asset-control">
            <label htmlFor="asset-text">Text</label>
            <input type="asset-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Manage your assets" />
        </div>
        <div className="asset-control">
            <label htmlFor="asset-amount">Amount <br />
                (negative - expense || positive - income)</label>
            <input type="asset-number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="What have your assets been doing.." />
        </div>
        <button className="btn">Manage Asset</button>
    </form> </>
  )
}
