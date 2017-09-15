import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

class AnotherComponent extends React.Component {
    render() {
        return (
            <p>yet another React Component</p>
        )
    }
}

class MyComponent extends React.Component {
    render() {
        return (
          <div>
              <h1>My Component</h1>
              {this.props.children}
              <p>More content</p>
          </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Hello World</p>
                <MyComponent>
                    <AnotherComponent></AnotherComponent>
                </MyComponent>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
