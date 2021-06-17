import './CollectionList.scss'
import Collection from '../Collection/Collection'

const CollectionList = ({ collectionData, removeCollection, updateCollection, addCollection }) => {

    return (
     <section className='my-collections'>
        <aside className='collection-title'>
            <h2>My Collections</h2>
        </aside>
        <section className='collection-container'>
                {collectionData.map(collection => {
                    return (
                        <Collection
                            key={collection.id}
                            id={collection.id}
                            title={collection.title}
                            removeCollection={removeCollection}
                            updateCollection={updateCollection}
                        />
                        )
                 })}
        </section>
        <button onClick={e=>(addCollection())} className='add-button'>+ Add New Collection</button>
     </section>   
    )
}

export default CollectionList