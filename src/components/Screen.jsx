import React, { useEffect } from 'react'
import { useCalc } from '../context/calcContext'

const Screen = () => {
  const { calc } = useCalc();

  return (
    <div className='screen' style={{fontSize: "3rem"}}>
      {calc.number ? calc.number : calc.result}
    </div>
  )
}

export default Screen