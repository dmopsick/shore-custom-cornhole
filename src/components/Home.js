import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from "react-scroll";
import Logo from '../images/logo512.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailForm from './EmailForm';
import BackgroundSlider from 'react-background-slider';

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
        width: "98%"
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
        marginTop: "15px",
        marginBottom: "15px"
    },

    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "white"
    }

}));

export default function Home() {
    const classes = useStyles();

    return(
        <div className={classes.homeContainer}>
            <div className={classes.section}>
            
            <BackgroundSlider
                images={['/images/giantsMets1.jpeg', '/images/yankeesChiefs1.jpeg', '/images/philliesEagles1.jpeg', '/images/giantsMets2.jpeg', '/images/yankeesChiefs2.jpeg', '/images/yankees1.jpeg', '/images/chiefs1.jpeg']}
                duration={5} transition={1} />

                 <div style={{   
                    zIndex: "100",
                    position: "absolute",
                    width: "100%",
                    top: "20%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignContent: "center"
                }}
                >
    
                    <img src={Logo}
                        alt="Shore Custom Cornhole logo"
                        style={{
                            width: "75%",
                            flexBasis: "20%",
                            maxWidth: "400px"
                        }}
                    />

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
                <h1 className={classes.sectionHeader}>Welcome</h1>
                <p className={classes.sectionText}>
                    My name is Scott McNamara and I have been making durable custom cornhole boards for 5 years. I've lived in Wall Township since 2006. I'm a  proud stay at home dad of 3 who took up woodworking as a hobby about 10 years ago. 
                </p>

                <p className={classes.sectionText}>
                    All boards will be 2’x4’ in size using high quality 1/2” plywood for the top, and 1”x4” pine for the frame and legs.
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
                <h1 className={classes.sectionHeader}>Place Order</h1>
                <p className={classes.sectionText}>
                    Fill out the form and I will respond with more information in 2-4 business days. 
                    Boards start at $300. Price depends on the design. Local pick up only. 
                    Order completion time is based on demand, but usually 2-3 weeks. 
                    Bags are available at thee rate of $40 for 8 bags. 
                    Cash and Venmo accepted. 
                </p>
                
               <EmailForm />
                
            </div>
            
        </div>
    )
}