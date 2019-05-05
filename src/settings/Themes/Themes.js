import React from 'react';
import { colors } from '../../utils/withTheme/themes'

export default props => {
    console.log(props)
    // const colors = [
    //     '#213058',
    //     '#f4ae3f',
    //     '#28696a',
    //     '#a53e4f',
    //     '#e1704d'
    // ]

    
    return (
        <div className="App" style={{backgroundColor: props.secondaryColor}}>
            <header className="App-header">
                <h1>Pick a Color</h1>
            </header>
            <div>
                {
                    colors.map(color => { return (<div 
                        key={color}
                        className={color === props.currentTheme ? 'theme-item selected':'theme-item'}
                        style={{ backgroundColor:`${color}` }}
                        onClick={() => props.onThemeSelect(color)}>
                        <div style={{color:'#efeeec'}}>{color}</div>
                        </div>)
                    })
                }
            </div>
        </div>
    );
}

// export default App;
