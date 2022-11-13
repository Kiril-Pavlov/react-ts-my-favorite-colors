import React from 'react'

type FavoriteColorsListProps ={
    colors:{
        name:string,
        code:string,
    }[]
}

const FavoriteColorsList = (props:FavoriteColorsListProps) => {
  return (
    <div className='my-favorite-color-list'>
        <h2 className='my-favorite-colors-subtitle'>Color colection</h2>
        {props.colors.map(color=>{
            return(
                <div className='fav-color-item' key={color.name}>
                    <div  className='fav-color-code' style={{backgroundColor:`${color.code}`}}></div>
                    <div className='fav-color-name'>{color.name}</div> 
                    <button className='remove-color-button'>Remove color</button>
                </div>
            )
        })}
    </div>
  )
}

export default FavoriteColorsList