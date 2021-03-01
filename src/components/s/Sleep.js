import React, { Component } from 'react';
import NavBar from '../NavBar';
import moment from 'moment';
import TimePicker from 'react-time-picker';


class Sleep extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentTime: '',
      alarmTime: '',
    }
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
      currentTime: moment().format('hh:mm') 
    });
  }

  handleTimeChange = (alarmTime) => {
    this.setState({
      alarmTime: alarmTime
    })
    console.log(this.alarmTime)
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
          {/* <input type="time" onChange={this.handleTimeChange}></input> */}
          <TimePicker onChange={this.handleTimeChange} />
        </form>
      </div>
    )
  }
};

export default Sleep;

