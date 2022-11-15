import React from 'react'

// import {SketchPicker} from "react-color"

import noColorsImg from "../assets/Vector.png"

type FavoriteColorsListProps = {
    colors:{
        name: string,
        code: string
    }[],
    deleteColor: any
}

const FavoriteColorsList = ({colors, deleteColor}:FavoriteColorsListProps) => {
  return (
    (colors.length !== 0 ? (
        <div className='my-favorite-color-list'>
            <h2 className='my-favorite-colors-subtitle'>Color colection</h2>
            {colors.map((color)=>{
                return(
                    <div className='fav-color-item' key={color.name}>
                        <div  className='fav-color-code' style={{backgroundColor:`${color.code}`}}></div>
                        <div className='fav-color-name'>{color.name}</div> 
                        <button className='remove-color-button' onClick={() => deleteColor(color)}>Remove color</button>
                    </div>
                )
            })}
            {/* <SketchPicker /> */}
        </div>

    ) : (
        <div className='no-colors-container'>
            <div className='no-colors-image-container'>
                <img src={noColorsImg} alt="No Colors" />
            </div>
            <h2 className='no-colors-subtitle'>
                Your color collection is empty!
            </h2>
            <p className='no-colors-paragraph'>
                Your color collection is empty!
            </p>
        </div>
    ))
  )
}

export default FavoriteColorsList