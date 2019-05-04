import React from 'react';
import Apps from '../components/Apps'
import Search from '../components/Search'
import Tasks from '../components/Tasks'
import Themes from '../settings/Themes/Themes.js'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Body extends React.Component {

    render = () => {
        const { onThemeSelect, currentTheme, secondaryColor, navHeight } = this.props
        const sectionStyle = {
            boxSizing: 'border-box', 
            height: `calc(100% - ${navHeight})`,
            minWidth: `320px`,
            padding: '10px',
            // margin: '2.5% auto',
            // backgroundColor: secondaryColor
        }
        return (
            <section style={sectionStyle}>
                Body
                {/* <Route path='/apps' render={(currentTheme) => Page({style: sectionStyle})(Apps)}/> */}
                <Route path='/apps' render={() => <Apps theme={{currentTheme, secondaryColor}} />}/>
                <Route path='/search' component={Search}/>
                <Route path='/tasks' component={Tasks}/>
                <Route 
                path='/themes' 
                render={ () => <Themes
                    onThemeSelect={onThemeSelect}
                    currentTheme={currentTheme} />
                }
                />
            </section>
        );
    }
    
}

const Page = props => WrappedComponent => <WrappedComponent {...props} />

export default Body

