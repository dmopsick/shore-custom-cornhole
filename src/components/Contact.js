import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ContactUs() {
    return(
        <div className='section tealBackground'>
            <h1 className='sectionHeader topHeader'>Contact Me</h1>
            <h2 className='sectionSubheader'>Let's talk shop</h2>

            <p className='sectionText marginTop'>
                <a href="mailto:shorecustomcornhole@gmail.com">
                    ShoreCustomCornhole@gmail.com <EmailIcon />
                </a> 
            </p>

            <h2 className='sectionSubheader marginTop'>Social Media</h2>
            <ul className='infoList' style={{
                textDecoration: 'none',
            }}>
                <li className='infoListItem'>
                    <a target="_blank"
                        rel="noreferrer noopener" 
                        href="https://www.instagram.com/shorecustomcornhole/">
                        Instagram<InstagramIcon fontSize='large' />
                    </a>
                </li>
            </ul>

        </div>
    );
}
