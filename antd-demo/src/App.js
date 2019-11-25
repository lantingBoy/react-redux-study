import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {loadData} from "./store/actions/actions"
import {testRedux} from './store/actions/actions'
/**
 * @connect ：connect([mapStateToProps],[mapDispatchToProps],[mergeProps],[options])
 * @作用 ：把指定的state和指定的action和 React组件连接起来
 * @mapStateToProps : 是一个函数并返回一个object 
 * @作用 ：将指定的state作为props注入到UI组件中
 * @mapDispatchToProps ：可以是一个函数 还可以是object
 * @作用 ：把指定的action作为props 注入到UI组件中
 */
class App extends Component {
  componentDidMount(){
  
   /* ！！！注意这里一定要调用 @mapDispatchToProps 把指定的action作为props 注入到UI组件中 ！！！ */ 
   this.props.loadData()
   this.props.testRedux()
  }
  render(){
    const {fetch,test} = this.props
    
    return(
      <div style={{padding:'30px'}}>
        <img src={logo} alt="" style={{width:'100px'}}/>
        {fetch.data.map((item,index)=>{
        return <div key={index}>{item.name}</div>
        })}
        {test.testData.length?test.testData.map((item,index)=>{
          return (<ul key={index}>
            <li>{item}</li>
          </ul>)
        }):'没有测试数据哟'}
      </div>
    )
  }
}
const mapStateToProps=state=>{
  return{
    fetch:state.fetch,
    test:state.test
  }
}

const mapDispatchToProps =dispatch=>{
  return{
    loadData:()=>dispatch(loadData()),
    testRedux:()=>dispatch(testRedux([1,2,3]))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
