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

    render = props => {
        console.log(this.props)
        return (
            <div 
            className="Container" 
            style={
                { ...this.props.style, height: '100%', overflow: 'auto'}
            }
            >
                <Body {...this.state} onSelect/>
                {/* <Head /> */}
                <Nav {...this.state} {...this.props}/>
            </div>

        );
    }
    
}

export default withTheme(Container)

