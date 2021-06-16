import './App.scss'
import Header from '../Header/Header'
import CollectionList from '../CollectionList/CollectionList'
import { useState } from 'react'

const App = () => {

  const [collectionData, setCollectionData] = useState(['Coins', 'World War II Stamps', 'Faberge Eggs'])

  return (
    <main className="App">
      <Header />
      <CollectionList 
        collectionData={collectionData}
      />
    </main>
  );
}

export default App
