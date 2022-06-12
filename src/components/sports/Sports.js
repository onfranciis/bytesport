import React from 'react';
import './Sports.css';
import { Link } from 'react-router-dom';

const Sports = () => {
  return (
    <div className='sports'>
      <p className='sports-wwb'>
        What we bit?
      </p>

      <ul>
        <Link to='/sports/tennis'>
          <li className='sports-tennis sports-component'>
            Tennis
          </li>
        </Link>

        <Link to='/sports/tennis'>
          <li className='sports-tennis sports-component'>
            Soccer
          </li>
        </Link>

        <Link to='/sports/tennis'>
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
        </Link>

      </ul>
    </div>
  )
}

export default Sports