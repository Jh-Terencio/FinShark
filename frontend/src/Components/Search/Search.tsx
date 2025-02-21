import React, { ChangeEvent, JSX, useState } from 'react'

type Props = {}

// * If you are not understanding what is React.FC<Props> and JSX.Element go to the FunctionComponents.md
const Search: React.FC<Props> = (props: Props): JSX.Element => {
  // Using generics to specify the type of your const
  const [search, setSearch] = useState<string>("");
  
  // Event handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setSearch will recive the value of e. In this exemple setSearch will recive what is in the input
    setSearch(e.target.value)
    console.log(e)
  }

  const onCLick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e)
  }

  return (
    <div>
      {/* // Every time that the input is changed the function handleChange() will be activated*/}
      <input value={search} onChange={(e) => handleChange(e)}/>
      <button onClick={(e) => onCLick(e)}></button>
    </div>
  )
}

export default Search