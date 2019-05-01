import React from 'react';

export default WrappedComponent => class Container extends React.Component {


    state = {
        currentTheme: '#e1704d',
        style: {
            position: 'relative',
            width: '100%',
            backgroundColor: '#efeeec',
            color: '#e1704d',
        }
    }

    onThemeSelect = hexValue => {
        this.setState(state => {
            const newStyle = state.style
            newStyle.color = hexValue
            return {
                style: newStyle
            }
        })
    }

    render = () => {
        return <WrappedComponent {...this.props} {...this.state} onThemeSelect={this.onThemeSelect}/>
    }
    
}


