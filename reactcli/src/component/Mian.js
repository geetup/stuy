import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link,Redirect} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Children from './Children';
class Mian extends Component {
    render(){
        return(
            <div>
              主页面
                <Router>
                    <div>
                        <Link to="/a/789">转跳a</Link>
                        ----
                        <Link to="/b">转跳b</Link>
                        ----
                        <Link to="/render">重定向</Link>
                        ----
                        <Link to="/Children/6">Children</Link>
                        <Route path="/a/:id" component={PageA}></Route>
                        <Route path="/b" component={PageB}></Route>
                        <Route path="/render" render={()=>{
                            return <Redirect to="/b"/>
                        }}></Route>
                        <Route path="/Children/:num" Children={Children}></Route>
                    </div>
                </Router>
            </div>

        )
    }
}
export default Mian