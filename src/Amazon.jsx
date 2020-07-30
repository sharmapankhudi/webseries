import React from 'react'
import Amazoncard from './Amazoncard'
import Amazondata from './Amazondata'
const Amazon = (props ) => {
    return(
        <>
       <div className="Main_Div text-center" >
         
         </div>
        <div class="container">
             <div className="row">
              <div className="col-sm-12">
                <div className="row">
                {
                   Amazondata.map((val, ind ) => {
                     return <Amazoncard key={ ind } imgsrc={val.imgsrc} imgtitle={val.imgtitle} sdes={val.sdes} link={val.link}/>
                   })
                }
                    </div>
                    </div>
                    </div>
                    </div>
                    
        </>
    )
}

export default Amazon