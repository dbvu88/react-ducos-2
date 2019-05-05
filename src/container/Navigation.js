import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = props => {
    console.log(props)
    const { currentTheme, secondaryColor, navHeight } = props.theme
    const { history } = props.router
    const navStyle = {
        backgroundColor: secondaryColor, 
        height: navHeight
    }
    const links = [ 'search', 'apps', 'tasks' ]
    return (
        <nav style={navStyle}>
            <svg  xmlns="http://www.w3.org/2000/svg" style={{display: `none`}}>
                <symbol id="apps" width="32" height="32">
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
                    </g>
                    <g>
                        <title>Layer 1</title>
                        <path id="svg_2" fill="#9b9b9b" d="m15.42,7.221c0,-0.951 -0.771,-1.721 -1.721,-1.721l-6.97,0c-0.951,0 -1.721,0.771 -1.721,1.721l0,6.103c0,0.951 0.771,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.103l-0.001,0z"/>
                        <path id="svg_3" fill="#9b9b9b" d="m27.742,7.221c0,-0.951 -0.77,-1.721 -1.721,-1.721l-6.971,0c-0.951,0 -1.721,0.771 -1.721,1.721l0,6.103c0,0.951 0.77,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.103z"/>
                        <path id="svg_4" fill="#9b9b9b" d="m15.42,18.676c0,-0.951 -0.771,-1.721 -1.721,-1.721l-6.97,0c-0.951,0 -1.721,0.77 -1.721,1.721l0,6.104c0,0.95 0.771,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.104l-0.001,0z"/>
                        <path id="svg_5" fill="#9b9b9b" d="m27.742,18.676c0,-0.951 -0.77,-1.721 -1.721,-1.721l-6.971,0c-0.951,0 -1.721,0.77 -1.721,1.721l0,6.104c0,0.95 0.77,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.104z"/>
                    </g>
                </symbol>
            
            </svg>
            <NavLink to='/apps'>
                <svg width="32" height="32">
                    <use xlinkHref='#apps' />
                </svg>
            </NavLink>
            <HistoryButton 
            link='back' 
            backgroundColor={currentTheme} 
            callback={() => history.goBack()}/>
            <ButtonGroup 
            links={links} 
            backgroundColor={currentTheme}/>         
            <HistoryButton 
            link='forward' 
            backgroundColor={currentTheme} 
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
    className='nav-item' 
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
    className='nav-item' 
    style={buttonStyle(link, backgroundColor)}
    onClick={ e => {
        e.preventDefault()
        callback()
    }}/>
}