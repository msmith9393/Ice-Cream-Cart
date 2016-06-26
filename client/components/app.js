import React, { Component } from 'react';
import Header from './header.js';
import MainBody from './mainBody.js';
import Footer from './footer.js';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <MainBody />
        <Footer />
      </div>
    )
  }

}

export default App;
