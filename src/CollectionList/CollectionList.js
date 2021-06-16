import './CollectionList.scss'
import Collection from '../Collection/Collection'

const CollectionList = () => {



    return (
     <section className='collection-list'>
        <aside className='collection-title'>
            <h2>My Collections</h2>
        </aside>
        <button className='add-button'>+ Add New Collection</button>
     </section>   
    )
}

export default CollectionList