import React from 'react';
import { FaHome, FaInfoCircle, FaTableTennis, FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <Link to='/' className='footer-home-link'>
            <FaHome className='footer-home-icon'/>
        </Link>

        <Link to='/sports' className='footer-sports-link'>
            <FaTableTennis className='footer-sports-icon'/>
        </Link>

        <Link to='/about' className='footer-info-link'>
            <FaInfoCircle className='footer-info-icon'/>
        </Link>
    </div>
  )
}

export default Footer