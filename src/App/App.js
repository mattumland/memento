import './App.scss'
import Header from '../Header/Header'
import CollectionList from '../CollectionList/CollectionList'
import { useState } from 'react'

const App = () => {

  const [collectionData, setCollectionData] = useState(['Faberge Eggs', 'World War II Stamps'])

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
