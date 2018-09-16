import React, { Component } from 'react';
import store from './../store';
import {connect } from 'react-redux';
const add = (num) => {
  console.log('-----action,text') ;
    return {
       type:'add',
        text:num
    }
};
class App extends Component {
    addHandle(num){
        //触发action
        store.dispatch(add(num));
    }
  render() {
    return (
      <div>
          <h1>hello world {this.props.count}</h1>
          {/*<button onClick = {this.addHandle.bind(this,2)}>click</button>*/}
          <button onClick ={()=>{
              this.props.add(2)
          }} >click</button>
      </div>
    );
  }
}
//获取state这个中的值就是count
const mapStateToProps = (state)=>{
    return{
        count:state.count
    }
} ;
const mapDispatchToProps = (dispatch)=>{
    return{
        add:(a)=>{
            dispatch(add(a))
        }
    }
} ;
export default connect(mapStateToProps,mapDispatchToProps)(App);
