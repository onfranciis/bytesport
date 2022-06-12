import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
        <div className='cardPart1'>
            <img src={props.image}/>
        </div>
        <div className='cardPart2'>
            <p>{props.name}</p>
            <p>{props.nation}</p>
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default Card