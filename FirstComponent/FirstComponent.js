class Button extends React.Component {
	//state can only be accessed by this component so result cannot
  //access it
  //state = {counter: 0};

  // handleClick = () => {
  // 	//async react -> react will schedule an update to batch them as needed
  //   //could lead to possible race condition so setting a component state relies
  //   //on using a previous component state, make sure to take in previous state
  //   this.setState((prevState) => ({
  //   	counter: prevState.counter +1
  //   }));
  // };

  //binds n functions creates new functions for every rendered button - expensive!

  handleClick = ()  => {
  	this.props.onClickFunction(this.props.incrementValue);
  }

  render() {
  	return (
    	<button onClick={this.handleClick}>
      +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
	return (
  	<div>{props.counter}</div>
  );
};

class App extends React.Component {
	state = {counter: 0};

  incrementCounter = (incrementValue) => {
      this.setState((prevState) => ({
    	counter: prevState.counter + incrementValue
    }));
  }

	// render method can only ever return a top level DOM node so if sibilings are required
  // they need to be wrapped in a parent div
	render() {
  	return (
    	<div>
      	<Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter}/>
      </div>
    )
  }

}

ReactDOM.render(<App />, mountNode);
