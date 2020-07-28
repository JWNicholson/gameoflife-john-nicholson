import React, { Component } from 'react'
//import Cell from './components/Cell'

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
        //for loop to build 25 x 25 grid
        for(let i =0;i < 25; i++){
            let childrens = [];
            for(let x=0; x < 25; x++){
                childrens.push(this.renderCell(x + i * 25))
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
