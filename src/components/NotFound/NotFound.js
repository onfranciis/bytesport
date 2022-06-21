import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Nav from '../nav/Nav';
import './NotFound.css'

const NotFound = () => {
  useDocumentTitle('404 Page Not Found');

  return (
    <div className='not-found'>
      <Nav/>
      <div className='not-found-child'>
          <p className='not-found-number'>
          404
          </p>
          <p className='not-found-text'>
          The requested page does not exist
          </p>
      </div>
    </div>
  )
}

export default NotFound