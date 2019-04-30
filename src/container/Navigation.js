import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Tasks from './assets/tasks.svg'
import Apps from './assets/apps.svg'
import Back from './assets/back.svg'
import Search from './assets/search.svg'
import { NavLink } from 'react-router-dom'
const Nav = props => {
    console.log(props)
    const { color: backgroundColor } = props.style
    const navStyle = { 
        backgroundColor, 
        position: 'absolute', 
        left: 0,
        right: 0,
        bottom: '0%',
        height: props.navHeight,
    }
    const anchorStyle = {
        boxSizing: `border-box`,
        padding: `4px`,
        height: `100%`,
        textAlign: `center`,
        display: `inline-block`,
        width: `calc(100% / 4)`
    }
    const links = [
        {icon: Back, path: '/'}, 
        {icon: Apps, path: '/'},
        {icon: Search, path: '/Search'},
        {icon: Tasks, path: '/Tasks'}
    ]
    return (
        <nav style={navStyle}>
        {
            links.map(link => (
                <NavLink 
                style={anchorStyle} 
                exact to={link.path}>
                <img 
                style={{transition: `all 0.5s`}}
                src={link.icon}/>
                </NavLink>
            ))
        }
        </nav>
    )

}

export default Nav

