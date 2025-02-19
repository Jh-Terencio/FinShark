import React from 'react'
import "./Card.css"

// * The interface provide to us all the labels for our data. With interface we can define the type of the data that is required
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

// * When we write this { companyName, ticker, price } is like a function that recive an argument, and we can do whatever we want to this arguments
const Card = ({ companyName, ticker, price }: Props) => {
  return <div className="card">
    <img src="" alt="preguica" />
    <div className="details">
      <h2>{companyName} ({ticker})</h2>
      <p>${price}</p>
    </div> 
    <p className="infon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium.</p>
  </div>
}

export default Card