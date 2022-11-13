import React from 'react'

type TitleProps = {
    title:string
}

const Title = (props: TitleProps) => {
  return (
    <h1 className='main-title'>
        {props.title}
    </h1>
  )
}

export default Title