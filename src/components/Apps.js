import React from 'react';
import { Route, Link } from 'react-router-dom'
import themeIcon from '../settings/Themes/themes.svg'


export default props => {
  console.log(props)
  const { 
    currentTheme: color, 
    secondaryColor: backgroundColor 
  } = props.theme  
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Apps</h1> */}
      </header>
      <div className='shortcut-container' style={{color, backgroundColor}}>
        <Link to='/themes' className='shortcut'>
          <img className='shortcut-icon' src={themeIcon} alt='shortcut-icon'/>
          <div className='shortcut-name' >Themes</div>
        </Link>
      </div>

    </div>
  );
}

// export default App;

const Apps = {
  
}
