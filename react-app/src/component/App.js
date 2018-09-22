import React, { Component } from 'react';
import {BrowserRouter as Router ,Route}from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/detail" component={Detail}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}
