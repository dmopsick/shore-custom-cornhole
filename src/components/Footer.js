import React from 'react';

export default function Footer() {
    return (
        <div className='sandBackground'
            style={{
                height: "100px",
                paddingTop: "10px",
                textAlign: "center",
                fontSize: "1.5 rem",
                borderTop: "1px solid white"
        }}>
            <a href="/gallery">
                Photo Gallery
            </a>
            <br/>
            <a href="mailto:shorecustomcornhole@gmail.com">
                ShoreCustomCornhole@gmail.com
            </a>  • 2022


        </div>
    )

}