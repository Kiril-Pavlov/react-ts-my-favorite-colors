import React from 'react'

interface FavoriteColorsListProps { 
    colors:Color[]|[]
}

interface Color {
    name: string; 
    code:string;
}


const FavoriteColorsList = ({colors}:FavoriteColorsListProps) => {
  return (
    (colors.length !== 0 ? (
        <div className='my-favorite-color-list'>
            <h2 className='my-favorite-colors-subtitle'>Color colection</h2>
            {colors.map((colors:Color)=>{
                return(
                    <div className='fav-color-item' key={colors.name}>
                        <div  className='fav-color-code' style={{backgroundColor:`${colors.code}`}}></div>
                        <div className='fav-color-name'>{colors.name}</div> 
                        <button className='remove-color-button'>Remove color</button>
                    </div>
                )
            })}
        </div>

    ) : (
        <div>
            No colors
        </div>
    ))
  )
}

export default FavoriteColorsList