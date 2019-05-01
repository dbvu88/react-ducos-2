import React from 'react';

export default props => {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        Apps
      </header>
      <a onClick={(e) => {
        e.preventDefault()
        props.history.goBack()
      }}>Back</a>

    </div>
  );
}

// export default App;
