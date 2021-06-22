
import React, { Component } from 'react'
import {carsContext}from './index'

export default class CarProvider extends Component {
  constructor(){
    super()
    this.state={
      red: false,
      blue: false,
      yellow: false,
    }
  }
  moveCar = (color,move) =>{
    this.setState({[color]: move})
  }
  render() {
    const provider = {...this.state, moveCar: this.moveCar}
    const{children} = this.props
    return (
      <div>
      <carsContext.Provider value={provider}>
      {children}
      </carsContext.Provider>
      </div>
    )
  }
}
