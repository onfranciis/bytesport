import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Nav from '../nav/Nav';
import './Homepage.css';

const Homepage = () => {
    useDocumentTitle('Home | ByteSport')

  return (
      <>
    <div className='homepage'></div>
        <Nav/>
        <div className='homepage-text'>
            <p className='homepage-welcome'>
                Welcome to
            </p>
            <p className='homepage-bytesport'>
                ByteSport
            </p>
            <p>
                Presenting a byte of the greatest athletes of all times
            </p>
        </div>
    </>
  )
}

export default Homepage