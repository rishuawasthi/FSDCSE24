import React from 'react'

function ICard({data}) {
  return (
    <div style={{border:"2px solid blue" }}>
      <h2>college:{data.college}</h2>
      <div>
        <img src={data.pic} height={200} width={200}></img>
      </div>
      <h2>Roll:{data.roll}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
    </div>
  )
}

export default ICard