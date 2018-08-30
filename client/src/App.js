import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AdList from './components/AdList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

//logo.svg file has been removed from here
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
        <ItemModal/>
        <AdList/>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
