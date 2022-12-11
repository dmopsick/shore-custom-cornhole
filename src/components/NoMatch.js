import React from 'react';

export default function NoMatch() {
  
    return(
        <div className='section tealBackground'>
            <h1 className='sectionHeader topHeader'>404 Error - Page Not Found</h1>
            <p className='sectionText'>We cannot find what you are looking for.</p> 
            <p  style={{
                    width: "80%",
                    margin: "auto",
                    textAlign: "center"
                }}  
            >
                <a className='largeBodyText' href="/">Return Home &gt;</a>
            </p>
            
        </div>
    )

}
