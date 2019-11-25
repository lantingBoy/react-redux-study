import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './store/store'
import {Provider} from 'react-redux'

/**
    @Provider : react-redux提供的一个React组件 作用：把store提供给子组件 
           <Provider store={store}></Provider> store 作为prop 传给provider组件 provider又可以提供给子组件
*/

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
