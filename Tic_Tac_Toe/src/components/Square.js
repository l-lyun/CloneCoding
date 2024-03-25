// Square.js

import React, { Component } from 'react'
import "./Square.css"

const Square = ({onClick, value}) => {
    return (
      <button className="sqaure" 
      // react에서 JSX에서 JS문법을 사용할 때 {}로 묶어서 삽입한다
      onClick={onClick}> 
      {/* 중괄호 주의하자! */}
          {value}
      </button>
    )
}

export default Square
