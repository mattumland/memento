import './App.scss'
import Header from '../Header/Header'
import CollectionList from '../CollectionList/CollectionList'
import { useState } from 'react'

const App = () => {

  const [collectionData, setCollectionData] = useState([{id: 1, title: 'Coins'}, {id: 2, title: 'World War II Stamps'}, {id:3, title: 'Faberge Eggs'}])

  const removeCollection = (id) => {
    const newCollection = collectionData.filter(collection => collection.id !== id)
    setCollectionData(newCollection)
  }

  const addCollection = (newCollection) => {
    setCollectionData( {collectionData: [...collectionData, newCollection]} )
  }

  const updateCollection = (id, newTitle) => {
    let collectionUpdate = collectionData
    collectionUpdate.forEach(collection => {
      if (collection.id === id) {
        collection.title = newTitle
      }
    })
    setCollectionData(collectionUpdate);
  }

  return (
    <main className="App">
      <Header />
      <CollectionList 
        collectionData={collectionData}
        removeCollection={removeCollection}
        updateCollection={updateCollection}
        addCollection={addCollection}
      />
    </main>
  );
}

export default App
