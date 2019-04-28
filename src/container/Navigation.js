import React from 'react';
import withTheme from '../utils/withTheme/withTheme'
import Tasks from './assets/tasks.svg'
import Apps from './assets/apps.svg'
import Back from './assets/back.svg'
const Nav = props => {
    // console.log(props)
    const { color: backgroundColor } = props.style
    const style = {backgroundColor}
    // const 
    return (
        <nav style={style}>
            <a className='container-nav-item'><img src={Back}/></a>
            <a className='container-nav-item'><img src={Apps}/></a>
            <a className='container-nav-item'><img src={Tasks}/></a>
        </nav>
    )

}

export default withTheme(Nav)

