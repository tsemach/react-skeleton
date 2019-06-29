import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';

// import Pagination from './components/common/pagination';

class App extends Component {
  render() {
    return (
      <React.Fragment>        
        <Header/>
        <h1>App Component</h1>        
      </React.Fragment>
    );
  }
}

export default App;