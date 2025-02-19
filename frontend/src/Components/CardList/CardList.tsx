import React from 'react'
import Card from '../Card/Card'

// * The interface provide to us all the labels for our data. With interface we can define the type of the data that is required
interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName='Apple' ticker='APPL' price={100}/>
      <Card companyName='Microsft' ticker='MSFT' price={200}/>
      <Card companyName='Tesla' ticker='TSLA' price={1}/>
    </div>
  )
}

export default CardList