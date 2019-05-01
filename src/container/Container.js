import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Nav from './Navigation'
import Body from './Body'
import { Route, Link } from 'react-router-dom'
import './styles/Container.css'
class Container extends React.Component {
    state = {
        navHeight: '45px'
    }

    componentDidMount = () => {
        // this.props.history.push('/apps')
    }

    render = props => {
        console.log(this.props)
        const { onThemeSelect, currentTheme } = this.props
        return (
            <div 
            className="Container" 
            style={
                { ...this.props.style, height: '100%', overflow: 'auto'}
            }
            >
                <Body 
                {...this.state}
                onThemeSelect={onThemeSelect}
                currentTheme={currentTheme}
                />
                {/* <Head /> */}
                <Nav {...this.state} {...this.props}/>
            </div>

        );
    }
    
}

export default withTheme(Container)

