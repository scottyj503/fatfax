import React, { PureComponent } from 'react';
import './Home.css';

class Home extends PureComponent {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>fatfax</h1>
          <p>A simple faxing app</p>
        </div>
      </div>
    );
  }
};

export default Home;
