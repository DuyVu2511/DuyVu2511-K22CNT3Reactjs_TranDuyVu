import React, { Component } from 'react'
import TDV_EventForm1 from './components/TDV_EventForm1';
import TDV_EventForm2 from './components/TDV_EventForm2';
import TDV_EventForm3 from './components/TDV_EventForm3';
import TDV_EventForm4 from './components/TDV_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <TDV_EventForm1/>
        <TDV_EventForm2/>
        <TDV_EventForm3/>
        <TDV_EventForm4 name="Tran Duy Vu"/>
      </div>
    )
  }
}

export default App;
