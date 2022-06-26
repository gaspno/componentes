import React from "react";

function ApovalCard(props){
    return(
        
        <div className="aprovalCard">
            <div className="question">
           {props.children}
            </div>

            <div className="option">

                <div className="aprove">
                Approve
                </div>
                
                <div className="reprove">
                Reprove
                </div>  

            </div>

        </div>   
        )
}

export default ApovalCard