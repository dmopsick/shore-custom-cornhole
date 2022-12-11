import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';

export default function Order() {
    return(
        <div className='section tealBackground'>
            <h1 className='sectionHeader topHeader'>Get A Quote</h1>
            <h2 className='sectionSubheader'>Get your boards exactly how you want them</h2>
            <p className='sectionText'>
                    Fill out the <a href="https://forms.gle/ZgMHir8UTQBF48ji8" target="_blank" rel="noopener noreferrer">Shore Custom Cornhole Order Form <ShoppingCartIcon /></a> and I will respond with more information in 2-4 business days.
                </p>

                <p className='sectionText'>
                    It is helpful if you attach reference images for your design to the form.  
                </p>

                <p className='sectionText'>
                    No Gmail account? Email me at <a href="mailto:shorecustomcornhole@gmail.com">shorecustomcornhole@gmail.com <EmailIcon /></a> with your design ideas and images.
                </p>
                
                <p className='sectionText'>
                    Price depends on the requested design. Cash or Venmo accepted.
                </p>

                <p className='sectionText centerText'>
                    <a href="https://forms.gle/ZgMHir8UTQBF48ji8" target="_blank" rel="noopener noreferrer">Shore Custom Cornhole Order Form <ShoppingCartIcon /></a>
                </p>

        </div>
    );
}
