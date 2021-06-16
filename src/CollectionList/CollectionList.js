import './CollectionList.scss'
import Collection from '../Collection/Collection'
import { useEffect } from 'react'

const CollectionList = ({ collectionData, removeCollection, updateCollection, addCollection }) => {
    
    const updateCollections = () => {
        return collectionData.map(collection => {
            return (
                <Collection 
                    key={collection.id}
                    id={collection.id}
                    title={collection.title}
                    removeCollection={removeCollection}
                    updateCollection={updateCollection}
                />
            )
        })
    }
  
    let collections = updateCollections();
    
    useEffect(() => {
        collections = updateCollections();
    })

    return (
     <section className='my-collections'>
        <aside className='collection-title'>
            <h2>My Collections</h2>
        </aside>
        <section className='collection-container'>
            {collections}
        </section>
        <button className='add-button'>+ Add New Collection</button>
     </section>   
    )
}

export default CollectionList