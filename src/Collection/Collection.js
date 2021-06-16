import './Collection.scss'
import pencil from '../icons/pencil.png'
import bin from '../icons/bin.png'
import check from '../icons/checkbox-checked.png'
import { useState } from 'react'

const Collection = ({ title, removeCollection, addCollection }) => {

    const [createMode, setCreateMode] = useState(!title.length > 0)
    const [formTitle, setFormTitle] = useState('add a title to your collection')

    const handleChange = (e) => {
        setFormTitle(e.target.value)
    }
    
   const submitCollection = (e) => {
        e.preventDefault();
    }

    const toggleCreateMode = () => {
        if (createMode === false) {
            setCreateMode(true)
        } else {
            setCreateMode(false)
        }
    }

    return (
        <article className='collection'>
            <div className='title-container'>
                <h3>{title}</h3>
            </div>
            <form className='hidden'>
                <input 
                    type='text'
                    placeholder={title || formTitle}
                    name='title'
                    value={formTitle}
                    onChange={event => handleChange(event)}
                />
            </form>
            <aside className='button-container'>
                <button onClick={e => removeCollection(title)}>
                    <img src={bin} alt='Delete icon: a trash can'/>
                </button>
                <button>
                    <img onClick={e => toggleCreateMode()} src={pencil} alt='Edit icon: a pencil' />
                </button>
                <button className='hidden'>{check}</button>
            </aside>
        </article>
    )

}

export default Collection