import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Tasks from './assets/tasks.svg'
import Apps from './assets/apps.svg'
import Back from './assets/back.svg'
import Foward from './assets/forward.svg'
import Search from './assets/search.svg'
import { NavLink, Link } from 'react-router-dom'
const Nav = props => {
    // console.log(props)
    const { color: backgroundColor } = props.style
    const navStyle = { 
        backgroundColor, 
        height: props.navHeight
    }
    const anchorStyle = {
        border: `4px solid ${backgroundColor}`,
    }
    const links = [
        // {icon: Back, path: '/Back'},
        {icon: Search, path: '/Search'}, 
        {icon: Apps, path: '/Apps'},
        {icon: Tasks, path: '/Tasks'}
    ]
    return (
        <nav style={navStyle}>
            
            <a 
                // style={anchorStyle}
                onClick={ e => {
                    e.preventDefault()
                    // console.log(props)
                    props.history.goBack()
                }}>
                <img 
                // style={{transition: `all 0.5s`}}
                src={Back}/>
            </a>
        {
            links.map(link => (
                <NavLink 
                // style={anchorStyle} 
                exact to={link.path}>
                <img 
                style={{transition: `all 0.5s`}}
                src={link.icon}/>
                </NavLink>
            ))
        }            
            <a 
                // style={anchorStyle}
                onClick={ e => {
                    e.preventDefault()
                    props.history.goForward()
                }}>
                <img 
                // style={{transition: `all 0.5s`}}
                src={Foward}/>
            </a>
        </nav>
    )

}

export default Nav

