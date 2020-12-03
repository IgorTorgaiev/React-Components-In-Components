import React from 'react';
import ReactDOM, { render } from 'react-dom';

// The class Internal is inside the class External

class Toy extends React.Component {
  render() {
    return <h2>I am a toy and I am inside the box</h2>;
  }
}
class Box extends React.Component {
  render() {
    return (
      <div>
        <h1>I am the box. I hold the toy inside myself</h1>
        <Toy />
      </div>
    );
  }
} 
ReactDOM.render(<Box />, document.getElementById('box'));

// Just one more analogous example below

// ReactDOM.render(<p>Just one more analogous example below</p>, document.getElementById('break'));
const sentence = <h3>Just one more analogous example below</h3>;
ReactDOM.render(sentence, document.getElementById('break'));

class Instruments extends React.Component {
  render() {
    return <h2>We are the instruments.</h2>;
  }
}
class Case extends React.Component {
  render() {
    return (
      <div>
        <h1>I am the case and all the instruments are inside me.</h1>
        <Instruments />
      </div>
    );
  }
}
ReactDOM.render(<Case />, document.getElementById('case'));
