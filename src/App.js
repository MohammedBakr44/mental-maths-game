import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
  super(props);
  const values = this.makeNewQuestion();
  this.state = {
    value1: values[0],
    value2: values[1],
    value3: values[2],
  	answer: values[0] + values[1] + values[2],
    proposedAnswer: values[3],
    get correct() { return this.answer === this.proposedAnswer },
    correctAnswers: 0,
    numberofQuestions: 0,
    
  }
  }
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };
  
    updateState = newValuesArray => {
    this.setState(currState => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3],
      answer: newValuesArray[0] + newValuesArray[1] + newValuesArray[2],
      get correct() {return this.answer === this.proposedAnswer}
    }));
  };
  
    handleQuestion = event => {
    const newValuesArray = this.makeNewQuestion();
    this.updateState(newValuesArray);
  };
  
  trueButton = (e) => {
    if(this.state.correct) {
      this.setState((currentState) => ({
		correctAnswers: currentState.correctAnswers + 1,
        numberofQuestions: currentState.numberofQuestions + 1
      }))
    } else {
    	this.setState((currentState) => ({
        numberofQuestions: currentState.numberofQuestions + 1
      }))
    }
    this.handleQuestion(e);
  }
  
  falseButton = (e) => {
  	if(!this.state.correct) {
    	this.setState((currentState) => ({
          	correctAnswers: currentState.correctAnswers + 1,
        	numberofQuestions: currentState.numberofQuestions + 1
        }))
    } else {
    	this.setState((currentState) => ({
        	numberofQuestions: currentState.numberofQuestions + 1
        }))
    }
    this.handleQuestion(e);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.trueButton}>True</button>
          <button onClick={this.falseButton}>False</button>
          <p className="text">
            Your Score: {this.state.correctAnswers}/{this.state.numberofQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
