import React from 'react';
import { makeStyles } from '@mui/styles';
import MetsGiantsBackground from '../images/giantsMets1.jpeg';
import { Link } from "react-scroll";
import Logo from '../logo.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const useStyles = makeStyles(theme => ({
    section: {
        height: "825px"
    },

    homeContainer: {
        color: "#000000",
        background: "#80b1c2",
        textAlign: "center"  
    },

    sectionHeader: {
        fontSize: "56px",
        margin: "auto",
        textAlign: "center",
        width: "98%"
    },

    welcomeText: {
        fontSize: "22px",
        width: "80%",
        margin: "auto",
        marginTop: "15px",
        marginBottom: "15px",
        paddingTop: "25px"
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
        color: "skyblue"
    }

}));

export default function Home() {
    const classes = useStyles();

    return(
        <div className={classes.homeContainer}>
            <div className={classes.section}>
                <img src={MetsGiantsBackground}  style={{
                        positon: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: "-100"
                    }} />
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
                        alt="Garden State Performance Logo"
                        style={{
                            width: "50%",
                            flexBasis: "20%"
                        
                        }}
                    />

                    <Link to="welcome"
                        smooth={true}
                        duration={500}
                        style={{color: "white", flexBasis: "100%"}}>
                        <h2>Welcome</h2>
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                
                </div>


            </div>

            <div id="welcome" className={classes.section} 
                style={{
                    marginTop: "80px"
                }}
            >
                <p className={classes.welcomeText}>
                    Thank you for visiting Shore Custom Cornhole. My name is Scott McNamara and I have been making durable custom cornhole boards for 5 years. I’ve lived in Wall Township since 2006. I’m a  proud stay at home dad of 3 who took up woodworking as a hobby about 10 years ago. 
                </p>
                
            </div>
            
        </div>
    )
}