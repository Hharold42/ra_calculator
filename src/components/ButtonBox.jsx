import React from 'react'
import Button from './Button'

const ButtonBox = ({values}) => {
  return (
    <div className='button-box'>
        {values.flat().map((val, index) => <Button key={index} value={val}/>)}
    </div>
  )
}

export default ButtonBox