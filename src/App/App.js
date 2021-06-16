import './App.scss'
import Header from '../Header/Header'
import CollectionList from '../CollectionList/CollectionList'
import { useState } from 'react'

const App = () => {

  const [collectionData, setCollectionData] = useState(['Coins', 'World War II Stamps', 'Faberge Eggs'])

  const removeCollection = (collectionName) => {
    const newCollection = collectionData.filter(collection => collection !== collectionName)
    setCollectionData(newCollection)
  }

  const addCollection = (newCollection) => {
    setCollectionData( {collectionData: [...collectionData, newCollection]} )
  }

  const updateCollection = () => {
  }

  return (
    <main className="App">
      <Header />
      <CollectionList 
        collectionData={collectionData}
        removeCollection={removeCollection}
        addCollection={addCollection}
      />
    </main>
  );
}

export default App
