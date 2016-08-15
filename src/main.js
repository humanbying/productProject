import React from 'react'
import ReactDOM from 'react-dom';
const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Name</h1>
        <h1>Description</h1>
        <h1>Price</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <App />, document.getElementById('root')
)
