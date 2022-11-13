import React from 'react'

type FavoriteColorsListProps ={
    colors:{
        name:string,
        code:string,
    }[]
}

const FavoriteColorsList = (props:FavoriteColorsListProps) => {
  return (
    <div>
        {props.colors.map(color=>{
            return(
                <div>
                    {color.name}
                    {color.code}
                </div>
            )
        })}
    </div>
  )
}

export default FavoriteColorsList