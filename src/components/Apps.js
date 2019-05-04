import React from 'react';
import { Route, Link } from 'react-router-dom'
import themeIcon from '../settings/Themes/themes.ico'


export default props => {
  console.log(props)
  // const style = 
  return (
    <div className="App">
      <header className="App-header">
        Apps
      </header>
      <Link to='/themes' className='shortcut' >
        <img src={themeIcon} alt='theme-icon'/>
        <div>Themes</div>
      </Link>
    </div>
  );
}

// export default App;

const Apps = {
  
}
