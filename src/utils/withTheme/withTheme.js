import React from 'react';
import { colors } from './themes.js'

export default WrappedComponent => class Container extends React.Component {


    state = {
        currentTheme: colors[1],
    }

    onThemeSelect = hexValue => {

        this.setState(state => {
            
            return {
                // style: newStyle,
                currentTheme: hexValue
            }
        })
    }

    render = () => {
        const style = {
            position: 'relative',
            width: '100%',
            backgroundColor: '#efeeec',
            color: this.state.currentTheme,
        }
        return <WrappedComponent {...this.props} {...this.state} style={style} onThemeSelect={this.onThemeSelect}/>
    }
    
}


