import React from 'react'
import './Card2.css';
import {FaTag, FaFlag, FaTrophy, FaGlobe, FaBirthdayCake} from 'react-icons/fa'

const Card = (props) => {
  return (
    <div className='card2' style={{height: `${props.height}px`, width: `${props.width}px` }}>
        <div className='card2Part1'>
            <img src={props.image} alt={`${props.name}`}/>
        </div>
        <div className='card2Part2' style={{backgroundColor: props.bgcolor, color: props.textcolor}}>
            <p><FaTag className='card2Part2icons'/> {props.name}</p>
            <p><FaFlag className='card2Part2icons'/> {props.nation}</p>
            <p><FaTrophy className='card2Part2icons'/> {props.title}</p>
            <p><FaBirthdayCake className='card2Part2icons'/> {props.dob}</p>
            {props.site ? <a href={`${props.site}`}><FaGlobe className='card2Part2icons'/> {props.site} </a> : ''}
        </div>
    </div>
  )
}

export default Card