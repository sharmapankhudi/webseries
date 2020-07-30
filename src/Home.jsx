import React from 'react'
import imgg from '../src/img/imgg.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return(
        <>
         <div className="row">
  <div className="col-sm-6">
       <div className="jumbotron Home">
                 <h1 className="display-4">Welcome to  Web Series</h1>
                 <p className="lead">Join Prime and Netflix to watch the latest movies, TV shows and award-winning Amazon Originals.</p>
                  <hr className="my-4" />
               
                   <p className="lead">
                         <NavLink className="btn btn-dark btn-lg" to="/Netflix" role="button">View more</NavLink>
               </p>
</div>
    
    </div>
  <div className="col-6">
       <div className="jumbotron ">
            <img src={imgg} className="imgurl"/>
</div>
    
    
    </div>
</div>
        </>
    )
}
export default Home