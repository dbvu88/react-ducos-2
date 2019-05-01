import React from 'react';
import { colors } from './themes.js'

export default WrappedComponent => class Container extends React.Component {


    state = {
        currentTheme: colors[0],
        style: {
            position: 'relative',
            width: '100%',
            backgroundColor: '#efeeec',
            color: colors[0],
        }
    }

    onThemeSelect = hexValue => {
        this.setState(state => {
            const newStyle = state.style
            newStyle.color = hexValue
            return {
                style: newStyle,
                currentTheme: hexValue
            }
        })
    }

    render = () => {
        return <WrappedComponent {...this.props} {...this.state} onThemeSelect={this.onThemeSelect}/>
    }
    
}


