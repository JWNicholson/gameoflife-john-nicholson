import React, { Component } from 'react'
import Cell from './Cell'

export default class Grid extends Component {
    renderCell = i =>{
        //set styling (dead/alive)
        return (
            <Cell 
            key={i} 
            cellstyle={this.props.cellstyle(i)} 
            onClick={() => this.props.onClick(i)} />
        )
    }

    renderGrid(){
        let grid = []
        //for loop to build 50 x 60 grid
        for(let i =0;i < 60; i++){
            let childrens = [];
            for(let x=0; x < 60; x++){
                childrens.push(this.renderCell(x + i * 60))
            }
            grid.push(<div key={i} className="grid-row">{childrens}</div>);
        }
        return grid
    }

    render() {
        return (
            <div>
               {this.renderGrid()}
            </div>
        )
    }
}
