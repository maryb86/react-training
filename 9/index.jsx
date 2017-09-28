import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hasHistory} from 'react-router'

import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

class Outer extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Some information</h3>
                {this.props.children}
                <p>Some more information</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/about' component={About} />
        </Route>
    </Router>, document.getElementById('app')
);
