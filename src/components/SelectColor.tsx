import React from 'react'

import { AiOutlineHeart } from "react-icons/ai"

type SelectColorProps = {
  select:string,
  setColor:any
}

const SelectColor = ({select,setColor}:SelectColorProps) => {


  return (
    <div className='add-colors-container'>
        <div className='input-container'>
          <div className='heart-icon'>
            <AiOutlineHeart fill='#D8D9D9' size={20} />
          </div>
          <div className='input-field'>
            <input type="text" placeholder='Color Name' />
          </div>
          <div className='selected-color-container'>
          <input type="color" id="head" name="head" onChange={e => setColor(e.target.value)}
           value={select} className="display-selected-color" />
          </div>
        </div>
        <button className='add-color-button'>+</button>
      </div>
  )
}

export default SelectColor