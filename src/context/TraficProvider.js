import React, { Component } from 'react'
import {trafficContext } from './index'

export default class TraficProvider extends Component {
  constructor(){
    super()
    this.state = {
      color: 'red'
    }
  }
  changeSignal = (signal) => {
    this.setState({color: signal})
  }
  render() {
    const provider = {signalColor: this.state.color, changeSignal: this.changeSignal}
    const{children}= this.props
    console.log(provider)
    return (
      <div>
        <trafficContext.Provider value ={provider}>
        {children}
       </trafficContext.Provider>

      </div>
    )
  }
}
