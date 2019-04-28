import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Nav from './Navigation'
import './Container.css'
class Container extends React.Component {
    state = {

    }

    render = () => {
        return (
            <div className="Container" 
            style={{...this.props.style, height: '100%'}}
            
            >
                <nav>
                </nav>
                <header className="Container-header">
                </header>

                <Nav />
                
            </div>
        );
    }
    
}

export default withTheme(Container)

