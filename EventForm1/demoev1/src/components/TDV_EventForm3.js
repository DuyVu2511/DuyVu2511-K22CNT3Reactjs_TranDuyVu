import React, { Component } from 'react'
// Xu ly su kien voi props, state
class TDV_EventForm3 extends Component {
    constructor(props){
        super(props);
        //Tao doi tuong du lieu thong qua state
        this.state = {
            name:"Tran Duy Vu",
            job:"Dev soft"
        }
    }

    //ham xu ly su kien
    handleChangeName = (ev)=>{
        this.setState({
            name:"K22CNT3-ReactJs"
        })
    }
    handleChangeJob = ()=>{
        this.setState({
            job:"Cong nghe phan mem",
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay doi du lieu trong state</h2>
        <p>Du lieu:{this.state.name} - {this.state.job}</p>
      <button onClick={this.handleChangeName}>Thay doi name</button>
      <button onClick={this.handleChangeJob}>Thay doi job</button>

      </div>
    )
  }
}

export default TDV_EventForm3;
