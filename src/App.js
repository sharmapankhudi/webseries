import React from 'react'
import Netfilx from './Netflix'
import Amazon from './Amazon'
import Navbar from './Navbar'
import Home from './Home'
import {Route, Switch} from 'react-router-dom';
//import Sdata from './Sdata'


const App = () => {
  return(
    <>
    <Navbar />
    <Switch> 
      <Route exact path='/' component={Home} />
      <Route exact path='/Netflix' component={Netfilx} />
      <Route path='/Amazon' component={Amazon} />
       {/*<Route path='/Sdata' component={Sdata} /> */}
    </Switch> 
    </>
  )
}
export default App