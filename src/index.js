import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Header';
import Adheader from './Adheader';
import Footer from './Footer';
import Conten from './Conten'
import Loader from './Loader';
import Specs from './Specs';
import Specs1 from './Specs1';
import Specs2 from './Specs2';
import Messenger from './Messenger';
import Messenger1 from './Messenger1';




//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
    <Route path="/Header" component={Header}/>
    <Route path="/Adheader" component={Adheader }/>
    <Route path="/Footer" component={Footer}/>
    <Route path="/Conten" component={Conten}/>
    <Route path="/Loader" component={Loader}/>
    <Route path="/Specs" component={Specs }/>
    <Route path="/Specs1" component={Specs1}/>
    <Route path="/Specs2" component={Specs2}/>
    <Route path="/Messenger" component={Messenger}/>
    <Route path="/Messenger1" component={Messenger1}/>
    </Router>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
