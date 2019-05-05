import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = props => {
    console.log(props)
    const { currentTheme, secondaryColor, navHeight } = props.theme
    const { history, location } = props.router
    const navStyle = {
        backgroundColor: secondaryColor, 
        height: navHeight
    }
    const links = [ 'search', 'apps', 'tasks' ]
    return (
        <nav style={navStyle}>
            <NavItemSVG />

            {/* <NavLink to='/apps'>
                <svg width="32" height="32" >
                    <use xlinkHref='#apps'/>
                </svg>
            </NavLink> */}
            <HistoryButton 
            link='back' 
            backgroundColor={currentTheme} 
            callback={() => history.goBack()}/>
            {NavItems(links, location.pathname, currentTheme)}
            <HistoryButton 
            link='forward' 
            backgroundColor={currentTheme} 
            callback={() => history.goForward()}/>
        </nav>
    )

}

export default Nav

const NavItems = (links, path, color) => links.map(link => (
    <NavLink to={`/${link}`}>
        <svg 
        width="32" 
        height="32"
        className='nav-item'  
        fill={`/${link}`===path?color:"#9b9b9b"}>
            <use xlinkHref={`#${link}`}/>
        </svg>
    </NavLink>
))

const NavItemSVG = () => <svg xmlns="http://www.w3.org/2000/svg" style={{display: `none`}}>
    <symbol id="apps" width="32" height="32">
        <path id="svg_2" d="m15.42,7.221c0,-0.951 -0.771,-1.721 -1.721,-1.721l-6.97,0c-0.951,0 -1.721,0.771 -1.721,1.721l0,6.103c0,0.951 0.771,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.103l-0.001,0z"/>
        <path id="svg_3" d="m27.742,7.221c0,-0.951 -0.77,-1.721 -1.721,-1.721l-6.971,0c-0.951,0 -1.721,0.771 -1.721,1.721l0,6.103c0,0.951 0.77,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.103z"/>
        <path id="svg_4" d="m15.42,18.676c0,-0.951 -0.771,-1.721 -1.721,-1.721l-6.97,0c-0.951,0 -1.721,0.77 -1.721,1.721l0,6.104c0,0.95 0.771,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.104l-0.001,0z"/>
        <path id="svg_5" d="m27.742,18.676c0,-0.951 -0.77,-1.721 -1.721,-1.721l-6.971,0c-0.951,0 -1.721,0.77 -1.721,1.721l0,6.104c0,0.95 0.77,1.721 1.721,1.721l6.971,0c0.951,0 1.721,-0.771 1.721,-1.721l0,-6.104z"/>
    </symbol>    

    <symbol id="tasks" width="32" height="32">
        <path id="svg_2" d="m25.695,9.43c0,0.771 -0.631,1.401 -1.402,1.401l-15.418,0c-0.771,0 -1.402,-0.63 -1.402,-1.401l0,-2.278c0,-0.771 0.631,-1.402 1.402,-1.402l15.418,0c0.771,0 1.402,0.631 1.402,1.402l0,2.278z"/>
        <path id="svg_3" d="m25.695,24.848c0,0.771 -0.631,1.402 -1.402,1.402l-15.418,0c-0.771,0 -1.402,-0.631 -1.402,-1.402l0,-2.278c0,-0.771 0.631,-1.401 1.402,-1.401l15.418,0c0.771,0 1.402,0.63 1.402,1.401l0,2.278z"/>
        <path id="svg_4" d="m25.695,17.139c0,0.771 -0.631,1.402 -1.402,1.402l-15.418,0c-0.771,0 -1.402,-0.631 -1.402,-1.402l0,-2.277c0,-0.771 0.631,-1.402 1.402,-1.402l15.418,0c0.771,0 1.402,0.631 1.402,1.402l0,2.277z"/>
    </symbol>

    <symbol id="forward" width="32" height="32">
        <path id="svg_1" d="m24.291,14.276l-9.586,-9.586c-0.878,-0.878 -2.317,-0.878 -3.195,0l-0.8,0.8c-0.878,0.877 -0.878,2.316 0,3.194l7.314,7.316l-7.315,7.315c-0.878,0.878 -0.878,2.317 0,3.194l0.8,0.8c0.878,0.879 2.317,0.879 3.195,0l9.586,-9.587c0.472,-0.471 0.682,-1.103 0.647,-1.723c0.036,-0.619 -0.174,-1.251 -0.646,-1.723z"/>
    </symbol>

    <symbol id="back" width="32" height="32">
        <path id="svg_1" d="m7.701,14.276l9.586,-9.585c0.879,-0.878 2.317,-0.878 3.195,0l0.801,0.8c0.878,0.877 0.878,2.316 0,3.194l-7.315,7.315l7.315,7.315c0.878,0.878 0.878,2.317 0,3.194l-0.801,0.8c-0.878,0.879 -2.316,0.879 -3.195,0l-9.586,-9.587c-0.472,-0.47 -0.681,-1.102 -0.647,-1.722c-0.034,-0.62 0.175,-1.252 0.647,-1.724z"/>
    </symbol>

    <symbol id="search" width="32" height="32">
        <path id="svg_2" d="m14.977,11.981c1.746,-3.062 1.319,-7.022 -1.291,-9.634c-3.132,-3.131 -8.206,-3.13 -11.337,0c-3.131,3.13 -3.131,8.206 0,11.336c2.572,2.573 6.457,3.027 9.498,1.371l4.512,4.513l3.102,-3.104l-4.484,-4.482zm-3.109,-0.116c-2.127,2.127 -5.575,2.127 -7.701,0c-2.127,-2.125 -2.127,-5.573 0,-7.699c2.126,-2.127 5.574,-2.127 7.701,0c2.126,2.126 2.126,5.574 0,7.699z"/>
        <path id="svg_3" d="m28.188,23.466l-5.775,-5.775c-0.471,-0.472 -1.241,-0.472 -1.711,0l-3.209,3.208c-0.471,0.471 -0.471,1.241 0,1.711l5.775,5.774c0.471,0.472 1.239,0.472 1.711,0l3.209,-3.207c0.468,-0.473 0.468,-1.241 0,-1.711z"/>
    </symbol>

</svg>

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