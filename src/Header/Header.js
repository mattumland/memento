import './Header.scss'
import logo from '../icons/logo.png'
import user from '../icons/user.png'
import cog from '../icons/cog.png'

const Header = () => {

    return (
        <header>
            <section className='title-box'>
                <div className='logo-container'>
                    <img src={logo} alt='The Memento logo: two overlapping blue circles' />
                </div>
                <h1>Memento</h1>
            </section>
            <nav>
                <button>
                    <img src={user} alt='User icon: a silhouette of a person' />
                </button>
                <button>
                    <img src={cog} alt='Settings icon: a gear' />
                </button>
            </nav>
        </header>
    )
}

export default Header