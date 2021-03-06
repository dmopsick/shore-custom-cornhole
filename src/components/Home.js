import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from "react-scroll";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const useStyles = makeStyles(theme => ({
    section: {
        height: "825px"
    },

    homeContainer: {
        color: "#000000",
        textAlign: "center"  
    },

    sectionHeader: {
        fontSize: "56px",
        margin: "auto",
        textAlign: "center",
        width: "98%",
        marginTop: "0px !important"
    },

    sectionText: {
        fontSize: "22px",
        width: "80%",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px"
    },

    sectionCaption: {
        fontSize: "22px",
        width: "90%",
        margin: "auto",
        paddingTop: "15px",
        marginBottom: "15px"
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
    var myIndex = 1;


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

            <div id="welcome" className={classes.section} 
                style={{
                    background: "#80b1c2"
                }}
            >
                <h1 className={classes.sectionHeader}>Welcome to Shore Custom Cornhole!</h1>
                <p className={classes.sectionText}>
                    My name is Scott McNamara and I have been making durable, custom painted cornhole boards for 5 years. I've lived in Wall Township since 2006. I'm a proud stay at home dad of 3 who took up woodworking as a hobby about 10 years ago.
                </p>

                <p className={classes.sectionText}>
                    <a href="/gallery">View my work</a>
                </p>

                <Link to="contact"
                    smooth={true}
                    duration={500}
                    style={{color: "white", flexBasis: "100%"}}>
                    <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                </Link>
            </div>

            <div className={classes.section} id="contact"
                style={{
                    background: "#8090c2"
                }}>
                <h1 className={classes.sectionHeader}>Get a Quote</h1>
                <p className={classes.sectionText}>
                    Fill out the <a href="https://forms.gle/ZgMHir8UTQBF48ji8" target="_blank" rel="noopener noreferrer">Shore Custom Cornhole Order Form</a> and I will respond with more information in 2-4 business days.
                </p>

                <p className={classes.sectionText}>
                    It is helpful if you attach reference images for your design to the form.  
                </p>

                <p className={classes.sectionText}>
                    No Gmail account? No problem! Just email me at <a href="mailto:shorecustomcornhole@gmail.com">shorecustomcornhole@gmail.com</a> with your design ideas and images.
                </p>

                <p className={classes.sectionText}>
                    Price depends on the requested design.  
                </p>

                <p className={classes.sectionText}>
                    Cash or Venmo accepted.
                </p>

                <p className={classes.sectionText}>
                    <a href="https://forms.gle/ZgMHir8UTQBF48ji8" target="_blank" rel="noopener noreferrer">Shore Custom Cornhole Order Form</a>
                </p>
                
                <p className={classes.sectionText}>
                    <a href="/gallery">View my work</a>
                </p>

            </div>
            
        </div>
    );
    
}