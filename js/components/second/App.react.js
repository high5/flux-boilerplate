import React from "react";

function getState() {
  return {
    sample: 'sample'
  };
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = getState();
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  /**
   * @return {object}
   */
  render() {
    return (
      <div className="container">
        <div>
          Second!
        </div>
      </div>
    );
  }

}

export default App;
