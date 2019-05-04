import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = props => {
    const { style, history, navHeight } = props
    const { backgroundColor, color } = style
    const navStyle = {
        backgroundColor: color, 
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
            backgroundColor={backgroundColor}/>         
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
        background: `url('./assets/${file}-unactive.svg') 
        center / 32px 32px 
        no-repeat 
        content-box 
        `,
        // boxShadow: `1px 1px 5px 1px ${bgColor}`
    }
}

const activeButtonStyle = (file, bgColor) => {
    return {
        background: `url('./assets/${file}.svg') 
        center / 32px 32px 
        no-repeat 
        content-box 
        ${bgColor}
        `,
        // transform: `translateY(-2.5px)`,

    }
}

const Button = props => {
    const { link, activeStyle, style } = props

    return <NavLink 
    style={style} 
    activeStyle={activeStyle}
    exact to={`/${link}`} />
}

const ButtonGroup = props => {
    const { links, backgroundColor } = props

    return links.map(link => {
        return <Button  
        link={link}
        style={buttonStyle(link, backgroundColor)}
        activeStyle={activeButtonStyle(link, backgroundColor)}/>
    })
}

const HistoryButton = props => {
    const { link, backgroundColor, callback } = props
    return <a 
    style={buttonStyle(link, backgroundColor)}
    onClick={ e => {
        e.preventDefault()
        callback()
    }}/>
}