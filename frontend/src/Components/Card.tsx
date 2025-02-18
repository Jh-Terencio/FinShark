import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
  return <div className="card">
    <img src="" alt="preguica" />
    <div className="details">
      <h2>AAPL</h2>
      <p>$100</p>
    </div> 
    <p className="infon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium.</p>
  </div>
}

export default Card