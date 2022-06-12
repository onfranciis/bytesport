import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
        <div className='logo'>
            <Link to='/'>
                <p>ByteSport</p>
            </Link>
        </div>

        <div className='nav-links'>
            <Link to='/'>
                <p>Home</p>
            </Link>

            <Link to='/sports'>
                <p>Sports</p>
            </Link>

            <Link to='/about'>
                <p>About Us</p>
            </Link>
        </div>
    </nav>
  )
}

export default Nav