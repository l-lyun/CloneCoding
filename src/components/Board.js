// Board.js

import React, {Component} from 'react'
import Square from './Square'
import "./Board.css"

export class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  renderSqauare(i) { // 직접 board-row에 넣을 수 있지만, 공통되는 영역
    // react에게 이 element 만들라고 지시
    // square 컴포넌트 인스턴스 생성
    // react 내부에서 자동적으로 render() 호출
    return <Square value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
    />

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