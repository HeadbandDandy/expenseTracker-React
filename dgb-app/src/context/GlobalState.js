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
        { id: 1, text: 'Apple Stock', amount: 213},
        { id: 2, text: 'Real-Estate', amount: 210},
        { id: 3, text: 'Doge-Coin', amount: -1100}
    ]
}

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
    function deleteAsset(id) {
        dispatch({
            type: 'DELETE_ASSET',
            payload: id
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