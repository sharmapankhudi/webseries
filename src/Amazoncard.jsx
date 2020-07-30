import React from 'react'
import Amazondata from './Amazondata'
//import {NavLink} from 'react-router-dom'

 const Amazoncard = (props) => {
     return(
         <>
         <div className="col-md-4 col-10">
        <div className="card" >
              <img className="card-img-top" src={props.imgsrc} alt={props.imgalt} />
                 <div className="card-body">
                   <h5 className="card-title">{props.imgtitle}</h5>
                       <p className="card-text">{props.sdes}</p>
                       <a href={props.link} target="_blank" rel="noopener noreferrer"  className="btn btn-dark">Click Here</a>
              </div>
           </div>
           </div>
         </>
     )
 }
 export default Amazoncard;