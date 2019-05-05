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
          {/* <img className='shortcut-icon' src={themeIcon} alt='shortcut-icon'/> */}
          <svg width="39.99999213750435" height="39.99999213750435" xmlns="http://www.w3.org/2000/svg">
            <path d="m13.631508,32.431488a4.08,4.08 0 0 0 5.76,0l4.66,-4.660002l8.309996,8.349997a2.51,2.51 0 0 0 3.580002,-3.580002l-8.309999,-8.309996l4.659998,-4.659998a4.08,4.08 0 0 0 0,-5.760001l-0.779997,-0.780001l-18.66,18.619998l0.780001,0.780005z" fill="#00ddff" id="svg_2"/>
            <path d="m23.051508,4.611485a4.08,4.08 0 0 0 -5.76,0l-12.860001,12.86a4.08,4.08 0 0 0 0,5.76l6.210001,6.209999l18.619999,-18.619998l-6.209999,-6.210001z" fill="#f776f0" id="svg_3" />
          </svg>
          <div className='shortcut-name' >Themes</div>
        </Link>
      </div>

    </div>
  );
}

// export default App;

const Apps = {
  
}
