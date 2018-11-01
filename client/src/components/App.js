import React from 'react';
import ShoppingCentreList from './ShoppingCentreList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCentres: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/api/shoppingCentres")
      .then(res => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          shoppingCentres: res.data
        });
      });
  }

  render() {
    return <ShoppingCentreList shoppingCentres = {this.state.shoppingCentres} / >
  }
}

export default App;
