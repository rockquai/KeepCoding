# Component Life Cycle

```javascript
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return (
      <div>
        
      </div>
    );
  }
}

```