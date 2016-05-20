import React from 'react';

const App = React.createClass({

  getInitialState: function(){
    return {
      test: 'test'
    }
  },

  render: function(){
    return (
      <div>{this.state.test}</div>
    );
  }
});

export default App;
