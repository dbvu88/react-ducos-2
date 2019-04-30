import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Nav from './Navigation'
import Body from './Body'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './styles/Container.css'
class Container extends React.Component {
    state = {
        navHeight: '40px'
    }

    render = () => {
        return (
            <Router>

                <div 
                className="Container" 
                style={{...this.props.style, height: '100%'}}
                >
                    <Body {...this.state} />
                    {/* <Head /> */}
                    <Nav {...this.state} {...this.props}/>
                </div>

            </Router>
        );
    }
    
}

export default withTheme(Container)

