import React, { JSX } from 'react'
import "./Card.css"

// * The interface provide to us all the labels for our data. With interface we can define the type of the data that is required
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

// * When we write this { companyName, ticker, price } is like a function that recive an argument, and we can do whatever we want to this arguments
const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
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

// * Another way to make this is this way
// * The React.FC<Props> is used to declare that a component is functional and he must recive props
// * The JSX.Element is the value type that the components will return. Here, the component return is typed as JSX.Element, which means TypeScript will ensure that you are returning something that is valid for React to render.
// const Card: React.FC<Props> = ({ companyName, ticker, price }): JSX.Element => {
//   return <div className="card">
//     <img src="" alt="preguica" />
//     <div className="details">
//       <h2>{companyName} ({ticker})</h2>
//       <p>${price}</p>
//     </div> 
//     <p className="infon">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium.</p>
//   </div>
// }