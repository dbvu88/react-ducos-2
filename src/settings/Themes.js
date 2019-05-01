import React from 'react';

export default props => {
    console.log(props)
    const colors = [
        '#213058',
        '#f4ae3f',
        '#28696a',
        '#a53e4f',
        '#e1704d'
    ]

    
    return (
        <div className="App">
            <header className="App-header">
                Themes
            </header>
            <div>
                {
                    colors.map(color => { return (<div 
                        key={color}
                        className={color === props.currentTheme ? 'theme-item selected':'theme-item'}
                        style={{ backgroundColor:`${color}` }}
                        onClick={() => props.onThemeSelect(color)}>
                        {color}
                        </div>)
                    })
                }
            </div>
        </div>
    );
}

// export default App;
