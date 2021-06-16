import './Collection.scss'
import pencil from '../icons/pencil.png'
import bin from '../icons/bin.png'
import check from '../icons/checkbox-checked.png'

const Collection = ({ title }) => {

    return (
        <article className='collection'>
            <div className='title-container'>
                <h3>{title}</h3>
            </div>
            <form className='hidden'></form>
            <aside className='button-container'>
                <button>
                    <img src={bin} alt='Delete icon: a trash can'/>
                </button>
                <button>
                    <img src={pencil} alt='Edit icon: a pencil' />
                </button>
                <button className='hidden'>{check}</button>
            </aside>
        </article>
    )

}

export default Collection