import React, { Component } from 'react'
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import {trafficContext} from './context'
import CarProvider from './context/CarProvider';
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      color: 'red'
    }
  }
  changeSignal = (color) =>{
    this.setState({color: color})
  }


  render() {
    const provider = {signalColor: this.state.color, changeSignal: this.changeSignal}
    console.log(provider)
  return (
    <div className="container">
      <CarProvider>
      <trafficContext.Provider value ={provider}>
          <Cars />
          <TrafficSignal />
      </trafficContext.Provider>
      </CarProvider>
    </div>
  );
}
}