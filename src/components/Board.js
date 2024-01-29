// Board.js

import React, {Component} from 'react'
import Square from './Square'
import "./Board.css"

export class Board extends Component {
  
  renderSqauare(i) { // 직접 board-row에 넣을 수 있지만, 공통되는 영역
    return <Square />
  }

  render() {
    return(
      <div>
        <div className='status'>Next Player: X, O</div>
        <div className='board-row'>
          {this.renderSqauare(0)}
          {this.renderSqauare(1)}
          {this.renderSqauare(2)}
        </div>
        <div className='board-row'>
          {this.renderSqauare(3)}
          {this.renderSqauare(4)}
          {this.renderSqauare(5)}
        </div>
        <div className='board-row'>
          {this.renderSqauare(6)}
          {this.renderSqauare(7)}
          {this.renderSqauare(8)}
        </div>
      </div>
    )
  }
}