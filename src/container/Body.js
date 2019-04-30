import React from 'react';
import Apps from '../components/Apps'
import Search from '../components/Search'
import Tasks from '../components/Tasks'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Body extends React.Component {
    state = {
        style: { 
            height: `calc(100% - ${this.props.navHeight})`
        }
    }

    render = () => {
        return (
            <div style={this.state.style}>
                Body
                <Route path='/' component={Apps}/>
                <Route path='/search' component={Search}/>
                <Route path='/tasks' component={Tasks}/>
            </div>
        );
    }
    
}

export default Body

