export default (state, action) => {
    switch(action.type) {
      case 'DELETE_ASSET':
      case 'DELETE_TRANSACTION':
        
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
          assets: state.assets.filter(asset => asset.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }

