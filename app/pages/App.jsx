import React from 'react'
import {Link} from 'react-router'
import constants from '../constants/app-constants.js'
import {incrementActions} from '../actions/app-actions.js'
import {TodoStore} from '../stores/count-store.js'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: TodoStore.getCount()
        }
        this.increment = this.increment.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange)
    }

    _onChange() {
        this.setState({
            count: TodoStore.getCount()
        })
    }

    increment() {
        incrementActions.incrementCount()
    }

    render() {
        return (
            <div>
                <header>
                  <h1>Our App</h1>
                  <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                  </nav>
                </header>
                {this.props.children}
                <footer>
                    Our Footer
                </footer>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increase Count</button>
            </div>
        )
    }
}
