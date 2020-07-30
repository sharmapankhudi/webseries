import React from 'react'
import {NavLink} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Navbar = () => {
    return(
        <>
        <div className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="col-sm-10">
          <NavLink className="navbar-brand" exact to='/'>Web Series</NavLink>
          </div>
          <div className="col-sm-2">
             <ul className="navbar-nav">
                <li className="nav-item">
                       
                       <NavLink to='/Netflix' className="nav-link">Netfilx </NavLink>
                </li>
         <li className="nav-item">
        
        <NavLink to='/Amazon' className="nav-link" >Amazon</NavLink>
     </li>
  </ul>
  </div>
</div>
        
       
        </>
    )
}

export default Navbar