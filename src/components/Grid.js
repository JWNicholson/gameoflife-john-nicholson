import React, { Component } from 'react'
import Cell from './Cell'


export default class Grid extends Component {
    render() {
        const width = this.props.cols * 12
        let rowsArr = []
        let cellClass = ""

        for (let x = 0; x < this.props.rows; x++) {
            for(let y = 0; y < this.props.cols; y++) {
              let cellId = `${x}_${y}`
              let cellClass = this.props.buildGrid[x][y] ? "cell-on" : "cell-off"

                //   load the gameboard array
              rowsArr.push(
                <Cell 
                  cellClass={cellClass}
                  key={cellId}
                  cellId={cellId}
                  row={x}
                  col={y}
                  selectCell={this.props.selectCell}
                />
              )
            }
        }
          

        return (
            <div className="game-board" style={{width:width}}>
                {rowsArr}
              
            </div>
        )
    }
}
