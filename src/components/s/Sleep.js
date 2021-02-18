import React, { Component } from 'react';
import NavBar from '../NavBar';

class Sleep extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentTime: '',
      alarmTime: '',
    }
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }

  componentDidMount(){
    this.clock = setInterval(() => this.setCurrentTime(), 1000)
    this.interval = setInterval(() => this.checkAlarmClock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.interval);
  }

  setCurrentTime(){
    this.setState({
      currentTime: (new Date().getTime() / 1000).toFixed(0) //Date().toLocaleDateString('en-US', {hour12: false} )
    });
  }

  setAlarmTime(e){
    e.preventDefault();
    const inputTime = e.target.value + ':00'
    this.setState({
      alarmTime: inputTime
    })
  }

  checkAlarmClock(){
    if(this.state.alarmMessage == 'undefined' || !this.state.alarmTime){
      this.alarmMessage = "Please set you alarm.";
    } else{
      this.alarmMessage = "Your alarm is set for" + this.state.alarmTime;
      if(this.state.currentTime === this.state.alarmTime){
        alert("Wake Up!");
      }
    }
  }

  render() {
    return (

      <div className="Sleep">

        <NavBar />
        <h1>Sleep</h1>
        <h2>It is {this.state.currentTime}.
        </h2>
        <h2>{this.alarmMessage}
        </h2>
        <form>
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
      </div>
    )
  }
};

export default Sleep;

