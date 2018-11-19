const React = require('react');
const Popular = require('./Popular');

// this.state
// lifecycle methods
// UI**

class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
