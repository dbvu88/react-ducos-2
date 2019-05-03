import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = props => {
    const { style, history, navHeight } = props
    const { color: backgroundColor } = style
    const navStyle = { 
        height: navHeight
    }
    const links = [ 'search', 'apps', 'tasks' ]
    return (
        <nav style={navStyle}>
            <HistoryButton 
            link='back' 
            backgroundColor={backgroundColor} 
            callback={() => history.goBack()}/>
            <ButtonGroup 
            links={links} 
            backgroundColor={backgroundColor}
            activeStyle={activeButtonStyle()}/>         
            <HistoryButton 
            link='forward' 
            backgroundColor={backgroundColor} 
            callback={() => history.goForward()}/>
        </nav>
    )

}

export default Nav


const buttonStyle = (file, bgColor) => {
    return {
        background: `url('./assets/${file}.svg') 
        center / 32px 32px 
        no-repeat 
        content-box 
        ${bgColor}`,
        boxShadow: `1px 1px 5px 1px ${bgColor}`
    }
}

const activeButtonStyle = () => {
    return {
        boxShadow: `none`
    }
}

const Button = props => {
    const { link, backgroundColor, activeStyle } = props

    return <NavLink 
    style={
        buttonStyle(link, backgroundColor)
    } 
    activeStyle={activeStyle}
    exact to={`/${link}`} />
}

const ButtonGroup = props => {
    const { links, backgroundColor, activeStyle } = props

    return links.map(link => {
        return <Button  
        backgroundColor={backgroundColor} 
        link={link}
        activeStyle={activeStyle}/>
    })
}

const HistoryButton = props => {
    const { link, backgroundColor, callback } = props
    return <a 
    style={
        buttonStyle(link, backgroundColor)
    } 
    onClick={ e => {
        e.preventDefault()
        callback()
    }}/>
}