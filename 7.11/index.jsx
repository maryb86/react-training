import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
    render() {
        return (
            <div>
              <p>Name: {this.props.name}</p>
              <p>Count: {this.props.count}</p>
            </div>
        )
    }
}

MyComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired
}

MyComponent.defaultProps = {
    name: 'joe'
}

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MyComponent count={4} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
