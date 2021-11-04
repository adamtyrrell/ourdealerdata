import React from 'react';
import '../App.css';

function TopContent() {
    return (
        <div>
        <div className="top-content pt-1 justify-items-start xl:pt-8">
            <div className="flex flex-col fade-in-text items-center" >
                <h1 className="large-txt font-semibold tracking-wider">Analytics</h1>
                <h1 className="tracking-wider text-2xl sm:text-5xl">for</h1>
                <h1 className="large-txt ">Accelerated</h1>   
                <h1 className="large-txt font-semibold tracking-wider " id="results">Results.</h1>  
            </div>   
        </div>
 
        </div>
    )
}

export default TopContent
