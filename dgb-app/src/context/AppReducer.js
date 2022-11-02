export default (state, action) => {
  switch(action.type) {
    case 'DELETE_ASSET':
    case 'DELETE_TRANSACTION':
      
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
        assets: state.assets.filter(asset => asset.assetId !== action.payload)
      }
    case 'ADD_TRANSACTION':
    case 'ADD_ASSET':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        assets: [action.payload, ...state.assets]
      }
    default:
      return state;
  }
}

