import React from 'react';

export default WrappedComponent => class Container extends React.Component {

    state = {
        style: {
            width: '100%',
            backgroundColor: '#efeeec',
            color: '#e1704d',
        }
    }

    render = () => {
        return <WrappedComponent style={this.state.style}/>
    }
    
}


