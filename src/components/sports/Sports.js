import React from 'react';
import './Sports.css';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Sports = () => {
  useDocumentTitle('Sports | ByteSport')

  return (
    <div className='sports'>
      <Nav/>
      <p className='sports-wwb'>
        What we bit?
      </p>

      <ul>
        <Link to='/sports/tennis'>
          <li className='sports-tennis sports-component'>
            Tennis
          </li>
        </Link>

        <Link to='/sports/soccer'>
          <li className='sports-soccer sports-component'>
            Soccer
          </li>
        </Link>

        {/* <Link to='/sports/tennis'>
          <li className='sports-tennis sports-component'>
            Basketball
          </li>
        </Link>

        <Link to='/sports/tennis'>
          <li className='sports-tennis sports-component'>
            Rugby
          </li>
        </Link>

        <Link to='/sports/tennis'>
          <li className='sports-tennis sports-component'>
            Cricket
          </li>
        </Link> */}

      </ul>
    </div>
  )
}

export default Sports