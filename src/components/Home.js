import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from "react-scroll";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HandymanIcon from '@mui/icons-material/Handyman';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';

const useStyles = makeStyles(theme => ({
    homeContainer: {
        color: "#000000",
        textAlign: "center"  
    },

    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "white"
    },

    movingArrowContainer: {
        zIndex: "100",
        position: "absolute",
        width: "100%",
        top: "50%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center"
    }

}));

export default function Home() {
    const classes = useStyles();
    var myIndex = 1; // For use in the sliedshow

    useEffect( () => {

        const backgroundSlider = setInterval(() => {
            var i;
            var x = document.querySelectorAll('.sectionWithBackgroundImage');
      
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1
            } 
            // Hide previous   
            x[myIndex-1].style.display = "block";    
            
            }, 3000);
          

        return () => clearInterval(backgroundSlider);
    });

    return(
        <div className={classes.homeContainer}>
            <div id="northWall1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="wave1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="compassAnchor1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="chiefsEaglesCompass1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="yankeesPhilliesAnchor1S" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>
            
            <div id="giantsMets1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>
            

            <div id="philliesEagles1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="yankeesChiefs1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="giantsMets2Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="yankees1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="chiefs1Slide" className='sectionWithBackgroundImage'>
                <div className={classes.movingArrowContainer}>
                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>   
            </div>

            <div id="welcome" className='section tealBackground'>
                <h1 className='sectionHeader'>Welcome to Shore Custom Cornhole!</h1>
                <p className='sectionText'>
                    My name is Scott McNamara and I have been making durable, custom painted cornhole boards since 2017. I've lived in Wall Township since 2006. I'm a proud stay at home dad of 3 who took up woodworking as a hobby about 10 years ago.
                </p>

                <p className='sectionText'>
                    <a href="/gallery">View my work <HandymanIcon /></a>
                </p>

                <Link to="contact"
                    smooth={true}
                    duration={500}
                    style={{color: "white", flexBasis: "100%"}}>
                    <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                </Link>
            </div>

            <div className='section darkBlueBackground' id="contact">
                <h1 className='sectionHeader'>Get a Quote</h1>
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

                <p className='sectionText'>
                    <a href="https://forms.gle/ZgMHir8UTQBF48ji8" target="_blank" rel="noopener noreferrer">Shore Custom Cornhole Order Form <ShoppingCartIcon /></a>
                </p>

            </div>
            
        </div>
    );
    
}