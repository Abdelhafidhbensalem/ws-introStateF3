import './App.css';
import React, { Component } from "react";
import Counter from './Components/Counter';


/*
function App() {
//console.log(tasks);

  return (
    <div className="App">
    
      
    </div>

  );
}

export default App;

*/

class App extends Component {
  state = { show:false,timer1:0,appDate:new Date().toLocaleTimeString() }

componentDidMount(){
  setInterval(() => {
    this.setState({timer1:this.state.timer1+1})
    this.setState({appDate:new Date().toLocaleTimeString()})
  }, 1000);
}
  render() { 
    return (<div><h1>App component</h1>
    <button onClick={()=>this.setState({show:!this.state.show})}>{this.state.show?"hide":"show"}</button>
    {this.state.show&&<Counter/>}
    <h4>TimerApp:{this.state.appDate}</h4>
    </div>);
  }
}
 
export default App;