import React, { useContext } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const CalcContext = createContext();
export const useCalc = () => useContext(CalcContext)

const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        result: 0
    })

    const reset = () => {
      setCalc({
        sign: "",
        number: 0,
        result: 0
      })
    }

    const calculate = () => {
      console.log(calc);
      const result = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        'X': (a, b) => a * b,
        '/': (a, b) => a / b
      }
      return result[calc.sign](calc.number, calc.result)
    }

    const providerValue = {
        calc, setCalc, reset, calculate
    }

  return (
    <CalcContext.Provider value={providerValue}>
        {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider