import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AssetBalance } from './components/AssetBalance';
import {IncomeExpenses} from './components/IncomeExpenses'
import { AssetTracker } from './components/AssetTracker';
import { TransactionHistory } from './components/TransactionHistory'
import { AssetHistory } from './components/AssetHistory';
import { AddTransaction } from './components/AddTransaction'
import {AddAsset} from './components/AddAsset'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      < Header />
      <div className='container'>
        <Balance />
        <AssetBalance />
        <IncomeExpenses />
        <AssetTracker />
        <TransactionHistory />
        <AssetHistory />
        <AddTransaction />
        <AddAsset />

      </div>

    </GlobalProvider>
  );
}

export default App;
