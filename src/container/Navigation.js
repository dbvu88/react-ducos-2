import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = props => {
    console.log(props)
    const { currentTheme, secondaryColor, navHeight } = props.theme
    const { history, location: { pathname: path }} = props.router
    const navStyle = {
        backgroundColor: secondaryColor, 
        height: navHeight
    }
    const links = [ 'search', 'apps', 'tasks' ]
    return (
        <nav style={navStyle}>
            <HistoryButton 
            link='back' 
            backgroundColor={currentTheme} 
            callback={() => history.goBack()}/>
        {links.map(link => (
            <NavLink key={link} to={`/${link}`}>
                <svg 
                width="32" 
                height="32"
                className='nav-item'  
                fill={`/${link}`===path?currentTheme:"#9b9b9b"}>
                    <use xlinkHref={`#${link}`}/>
                </svg>
            </NavLink>
        ))}
        <HistoryButton 
            link='forward' 
            backgroundColor={currentTheme} 
            callback={() => history.goForward()}/>
        </nav>
    )

}

export default Nav
const HistoryButton = props => {
    const { link, callback } = props
    return <a to=''
    onClick={ e => {
        e.preventDefault()
        callback()
    }}>
        <svg 
        width="32" 
        height="32"
        className='nav-item'  
        fill={"#9b9b9b"}>
            <use xlinkHref={`#${link}`}/>
        </svg>
    </a>
}