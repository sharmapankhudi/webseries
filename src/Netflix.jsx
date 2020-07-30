import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
const Netflix = (props ) => {
    return(
        <>
       <div className="Main_Div text-center" >
        
         </div>
        <div class="container">
             <div className="row">
              <div className="col-sm-12">
                <div className="row">
                 {
                   Sdata.map((val, ind ) => {
                     return <Card key={ ind } imgsrc={val.imgsrc} imgtitle={val.imgtitle} sdes={val.sdes} link={val.link} />
                   })
                }
                 </div>  
           </div>
    
  </div>
</div>
        </>
    )
}

export default Netflix