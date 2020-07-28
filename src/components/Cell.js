import React from 'react'

function Cell(props) {
    return (
        //make cell a button for selection
            <button className={props.cellstyle} onClick={props.onClick} />
        
    )
}

export default Cell
