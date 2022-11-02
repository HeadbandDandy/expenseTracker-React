import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'


//initial State...Pulls transactions

const initialState = {
    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
         ],
    assets: [
        { assetId: 1, assetText: 'Apple Stock', assetAmount: 213},
        { assetId: 2, assetText: 'Real-Estate', assetAmount: 210},
        { assetId: 3, assetText: 'Doge-Coin', assetAmount: -1100}
    ]
}
console.log(initialState)

//belows creates the context

export const GlobalContext = createContext(initialState)


//below creates a provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //below contains action implentations making calls to the reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    function deleteAsset(assetId) {
        dispatch({
            type: 'DELETE_ASSET',
            payload: assetId
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function addAsset(asset) {
        dispatch({
            type: 'ADD_ASSET',
            payload: asset
        })
    }

    return (<GlobalContext.Provider value ={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        assets: state.assets,
        deleteAsset,
        addAsset
    
        }}>
        {children}
    </GlobalContext.Provider>)

}