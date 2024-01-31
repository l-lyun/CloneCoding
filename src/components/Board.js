// Board.js

import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) => {
  // App.js에서 구현
  // const handleClick = i => {
  //   const newSquares = squares.slice();
  //   if(calculateWinner(newSquares) || newSquares[i]) {
  //     return;
  //   }
  //   newSquares[i] = xIsNext ? 'X' : 'O';
  //   setSquares(newSquares);
  //   // setXIsNext(!xIsNext);
  //   // 위 아래가 여기서는 동일하다, 어떨 때 다를지 생각해보자!
  //   setXIsNext(previousState => !previousState);
  // }



  const renderSqauare = (i) => { // 직접 board-row에 넣을 수 있지만, 공통되는 영역
    // react에게 이 element 만들라고 지시
    // square 컴포넌트 인스턴스 생성
    // react 내부에서 자동적으로 render() 호출
    return <Square value={squares[i]}
    onClick={() => onClick(i)}
    />

  }


    return(
      <div className='board-wrapper'>
        <div className='board-row'>
          {renderSqauare(0)}
          {renderSqauare(1)}
          {renderSqauare(2)}
        </div>
        <div className='board-row'>
          {renderSqauare(3)}
          {renderSqauare(4)}
          {renderSqauare(5)}
        </div>
        <div className='board-row'>
          {renderSqauare(6)}
          {renderSqauare(7)}
          {renderSqauare(8)}
        </div>
      </div>
    )
}
export default Board
