import React from 'react'
import './SecondContentBox.css'
import uploadImg from '../images/upload.png';

function SecondContent() {
    return (
        <div>
            <div className="content-box"></div>
            <div className="overlay">
            <h3 className="ml-10 font-bold text-lg tracking-wider md:text-2xl md:ml-20">Data Extraction</h3>
                <div className="">
                    
                    <hr className=""/>
                    
                </div>
                <div>
                    <img src={uploadImg} alt="upload" className="p-5 circle-img"/>
                    <p className="ml-10 md:ml-20">Seemlessly pull data from your current CMS. Our system will automatically interpret the data into powerful reports to help tailor your business.</p>
                </div>
            </div>
        </div>
    )
}

export default SecondContent;
