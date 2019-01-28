import React from 'react'

//return the dot component

const Dot = ({ id, active, dotClick }) => {
  const names = active ? 'dot active' : 'dot'
  return <div className={names} onClick={() => dotClick(id)} />
}


export default Dot