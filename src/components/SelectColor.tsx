import React from 'react'

import { AiOutlineHeart } from "react-icons/ai"

const SelectColor = () => {
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
            <div className='display-selected-color'>

            </div>
          </div>
        </div>
        <button className='add-color-button'>+</button>
      </div>
  )
}

export default SelectColor