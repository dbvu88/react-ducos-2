import React from 'react';
import { colors } from './themes.js'

export default WrappedComponent => class Container extends React.Component {


    state = {
        currentTheme: colors[1],
        secondaryColor: '#efeeec'
    }

    onThemeSelect = hexValue => {
        this.setState(state => {
            if (state.currentTheme === hexValue) {
                return null
            }
            return {
                currentTheme: hexValue
            }
        })
    }

    render = () => {
        return <WrappedComponent
        router={{...this.props}} 
        theme={{
            ...this.state,
            navHeight: '45px',
            onThemeSelect: this.onThemeSelect,
        }}  
        />
    }
    
}


