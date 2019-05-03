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
            <ButtonGroup links={links} backgroundColor={backgroundColor}/>         
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
        ${bgColor}`
    }
}

const Button = props => {
    const { link, backgroundColor } = props

    return <NavLink 
    style={
        buttonStyle(link, backgroundColor)
    } 
    exact to={`/${link}`} />
}

const ButtonGroup = props => {
    const { links, backgroundColor } = props

    return links.map(link => {
        return <Button backgroundColor={backgroundColor} link={link} />
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