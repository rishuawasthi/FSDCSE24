import React from 'react'
import { useState } from 'react'



function Mystate() {
  const [counter,SetCounter]=useState(10);
  function increment(){
    SetCounter(counter+10);
  }
  function decrement(){
    SetCounter(counter-5)
  }

  return (
    <div>
      Mystate
      <h1>counter={counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      </div>
  )
}

export default Mystate ;