import React,{useRef,useState} from 'react';
//import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Align from './align';
import Home from './components/home';
import Experience from './components/experience';
import Qualification from './components/qualification';
import Contact from './components/contact';
import {Table} from 'react-bootstrap';
import './App.css';


function App(){
return(<div className='body'>


<Align/>
<Router>
 <Switch>
<Route exact path='/Home' component={Home}/>
<Route exact path='/Experience' component={Experience}/>
<Route exact path='/Qualification' component={Qualification}/>
<Route exact path='/Contact' component={Contact}/>


</Switch>
</Router> 

 </div>)



}
export default App;
