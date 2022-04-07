
import React from "react"

function Currency({currencies}){

const currencyList = currencies.map((currency, index)=> <li key={index}>{currency}</li>)
  return <>
  
  {currencyList}
  </>
}


export default Currency
