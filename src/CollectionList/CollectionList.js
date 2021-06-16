import './CollectionList.scss'
import Collection from '../Collection/Collection'

const CollectionList = ({ collectionData }) => {

    const collections = collectionData.map((collection, index) => {
        return (
            <Collection 
                key={index}
                title={collection}
            />
        )
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