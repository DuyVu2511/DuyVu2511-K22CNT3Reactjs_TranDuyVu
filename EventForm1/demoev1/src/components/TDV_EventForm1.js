import React, { Component } from 'react'

 class TDV_EventForm1 extends Component {

    // Hàm xu ly su kien 
    eventHandleClick1 = ()=>{
        alert("event handle 1");
    }
    eventHandleClick2 = ()=>{
        alert("event handle 2");
    }


  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event handle</h2>
        {/* goi ham xu ly su kien khi render */}
        {/* <button onClick={this.eventHandleClick1()}>Click1</button> */}
        {/* goi ham xu ly khi click */}
        <button onClick={this.eventHandleClick2()}>Click2</button>
      </div>
    )
  }
}

export default TDV_EventForm1;
