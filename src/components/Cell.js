import React from 'react'

//import '../index.css'

const Cell = (props) => {

  return (
    <div 
      className={props.cellClass}
      id={props.id}
      onClick={() => props.selectBox(props.row, props.col)}
    />
  )
}

 

export default Cell
