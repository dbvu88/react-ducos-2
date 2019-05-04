import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Nav from './Navigation'
import Body from './Body'
import { Route, Link } from 'react-router-dom'
import './styles/Container.css'
class Container extends React.Component {
    state = {
        navHeight: '45px',
        style: this.props.style
    }

    componentDidMount = () => {
        // this.props.history.push('/apps')
    }

    render = props => {
        console.log(this.props)
        const { onThemeSelect, currentTheme, history } = this.props
        const containerStyle = {
            ...this.state.style, 
            height: '100%', 
            overflow: 'auto'
        }
        return (
            <div 
            className="Container" 
            style={containerStyle}>
                <Body 
                {...this.state} 
                onThemeSelect={onThemeSelect}
                currentTheme={currentTheme}
                />
                <Nav {...this.state} history={history} />
            </div>

        );
    }
    
}

export default withTheme(Container)

