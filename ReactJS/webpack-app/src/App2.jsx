import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial Data',
      num: 0
    }
    this.setIncrement = this.setIncrement.bind(this);
    this.updateState = this.updateState.bind(this);
    this.dblnIcrement = this.dblnIcrement.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
  }

  findDomNodeHandler() {
    var myDiv = document.getElementById("mydiv");
    ReactDOM.findDOMNode(myDiv).style.color="green";
  }

  setIncrement() {
    this.setState({num: this.state.num+1});
  }

  dblnIcrement() {
    this.setState({num: this.state.num+2});
  }

  updateState(e) {
    this.setState({data:e.target.value})
  }

  mouseOver() {
    ReactDOM.findDOMNode(document.getElementById('mydiv')).innerHTML="Mouse Over";
  }

  render() {
    return (
      <div>
        <Header />
        <button onMouseOver={this.mouseOver} onClick={this.setIncrement}> 
          Increment Number
        </button> 
        <div id='mydiv'>NODE</div>
        <Content data={this.state.num} update={this.updateState} mouseOverEvent={this.mouseOver}/>
        <Footer />
      </div>
    )
  }
}


class Content extends React.Component {
  componentWillMount() {
    console.log("COMPONENT WILL MOUNT");
  }
  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
  }
  componentWillReceiveProps(newProps) {
    console.log("COMPONENT WILL RECEIVE PROPS");
  }
  shouldComponentUpdate(newProps,newState) {
    return true;
  }
  componentWillUpdate(nextProps,nextState) {
    console.log("COMPONENT WILL UPDATE");
  }
  componentDidUpdate(prevProps,prevState) {
    console.log("COMPONENT DID UPDATE");
  }
  componentWillUnmount() {
    console.log("COMPONENT WILL UNMOUNT");
  }

  render() {
    return(
      <div>
        <input type='text' value={this.props.data} onChange={this.props.update} /> 
        <h3 onMouseOver={this.props.mouseOverEvent}>{this.props.data}</h3>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    )
  }
}

export default App;