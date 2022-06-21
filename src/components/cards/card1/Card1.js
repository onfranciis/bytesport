import React from 'react'
import './Card1.css';
import { FaGlobe} from 'react-icons/fa'

const Card = (props) => {
  return (
    <div className='card1' style={{height: `${props.length}px`, width: `${props.length}px`, border: props.border }}>
        <div className='card1Part1' style={{backgroundImage: `url("${props.image}")`, backgroundSize: props.coverSize}}>
            {/* <img src={props.image} alt={`${props.name}`}/> */}
        </div>
        <div className='card1Part2' style={{backgroundColor: props.bgcolor, color: props.textcolor, backgroundSize: props.cover}}>
            <p>{props.name}</p>
            {props.site ? <a href={`${props.site}`}><FaGlobe className='card1Part2icons'/> {props.site} </a> : ''}
        </div>
    </div>
  )
}

export default Card