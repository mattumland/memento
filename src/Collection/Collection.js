import './Collection.scss'
import pencil from '../icons/pencil.png'
import bin from '../icons/bin.png'
import check from '../icons/checkbox-checked.png'
import { useState } from 'react'

const Collection = ({ title, id, removeCollection, updateCollection }) => {

    const [createMode, setCreateMode] = useState(!title.length > 0)
    const [formTitle, setFormTitle] = useState(title)

    const handleChange = (e) => {
        setFormTitle(e.target.value)
    }
    
   const submitCollection = (e) => {
        e.preventDefault();
        if (!formTitle) {
            alert("Please enter a name for your collection.")
            return
        }
        updateCollection(id, formTitle)
        toggleCreateMode();
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
            <div className={createMode ? 'hidden' : 'title-container'}>
                <h3>{title}</h3>
            </div>
            <form className={createMode ? 'collection-form' : 'hidden'}>
                <input 
                    data-cy='inputForm'
                    type='text'
                    placeholder='name your collection'
                    name='title'
                    value={formTitle}
                    onChange={event => handleChange(event)}
                />
            </form>
            <aside className='button-container'>
                <button data-cy='delete' onClick={e => removeCollection(id)}>
                    <img src={bin} alt='Delete icon: a trash can'/>
                </button>
                <button onClick={e => toggleCreateMode()} className={createMode ? 'hidden' : ''}>
                    <img src={pencil} alt='Edit icon: a pencil' />
                </button>
                <button onClick={e => submitCollection(e)} className={createMode ? '' : 'hidden'}>
                    <img data-cy='complete' src={check} alt='Complete icon: a checkmark' />
                </button>
            </aside>
        </article>
    )

}

export default Collection