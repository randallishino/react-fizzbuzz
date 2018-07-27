import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FizzBuzz extends React.Component {
  constructor() {
  super()
  
  this.state = {
    counter: 1
  }
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.checkNumber = this.checkNumber.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  decrement() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  
  checkNumber(counter) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      return <h3> Fizzbuzz! {counter} is divisible by 3 and 5 ! </h3>
    }
    else if(counter % 5 === 0) {
      return <h3> Buzz! {counter} is divisible by 5!</h3>
    }
    else if (counter % 3 === 0) {
      return <h3> Fizz! {counter} is divisible by 3! </h3>
    }
    else {
      return <h3> {counter}</h3>
    }
  }
  
  render() {
    return (
      <div>
      <h1> React FizzBuzz </h1>
        <h3> Counting incrementally, any number divisible by 3 is replaced by the word "fizz", and any number divisible by five with the word "buzz". Also, any number divisible by both 3 and 5 will print "Fizzbuzz" </h3>
      <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
        {this.checkNumber(this.state.counter)}
        </div>
    )
  }
}

export default FizzBuzz;
