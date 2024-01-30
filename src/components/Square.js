// Square.js

import React, { Component } from 'react'
import "./Square.css"

export default class Square extends Component {



  render() {
    return (
      <button className="sqaure" 
      // react에서 JSX에서 JS문법을 사용할 때 {}로 묶어서 삽입한다
      onClick={() => { this.props.onClick()}}> 
      {/* 중괄호 주의하자! */}
          {this.props.value}
      </button>
    )
  }
}
