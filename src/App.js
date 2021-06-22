import React, { Component } from 'react'
import TrafficSignal from './TrafficSignal'
import './App.css';
import Cars from './Cars';
import CarProvider from './context/CarProvider';
import TraficProvider from './context/TraficProvider';
export default class App extends Component {

  render() {
    return(
    <div className="container">
      <CarProvider>
         <Cars />
      </CarProvider>
      <TraficProvider>
      <TrafficSignal />
      </TraficProvider>
    </div>
  );
  }
}