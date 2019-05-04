import React from 'react';
import Apps from '../components/Apps'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import Themes from '../settings/Themes/Themes.js'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Body extends React.Component {
    state = {
        style: { 
            height: `calc(100% - ${this.props.navHeight})`
        }
    }

    render = () => {
        const { onThemeSelect, currentTheme } = this.props
        return (
            <div style={this.state.style}>
                Body
                <Route path='/apps' component={Apps}/>
                <Route path='/search' component={Search}/>
                <Route path='/tasks' component={Tasks}/>
                <Route 
                path='/themes' 
                render={() => <Themes
                    onThemeSelect={onThemeSelect}
                    currentTheme={currentTheme}
                    />
                }
                // onThemeSelect={this.props.onThemeSelect}
                />
            </div>
        );
    }
    
}

export default Body

