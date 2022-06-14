import React from 'react';
import { makeStyles } from '@mui/styles';
import MetsGiantsBackground from '../images/giantsMets1.jpeg';
import { Link } from "react-scroll";
import Logo from '../images/logo512.png';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import EmailForm from './EmailForm';

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
                <img src={MetsGiantsBackground}  
                    alt="New York Giants and Mets Cornhole boards"
                    style={{
                        positon: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: "-100",
                        filter: "grayscale(75%)"
                    }}
                />
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

                <div 
                    style={{
                        width: "50%",
                        margin: "auto"
                    }}>

                    <Card
                         sx={{ boxShadow: 3 }}  
                        style={{
                        width: "100%",
                        maxWidth: "325px",
                        margin: "auto"
                    }}>
                        <CardMedia
                            component="img"
                       
                            image="/images/yankeesChiefs1.jpeg"
                            alt="Yankees and Chiefs"
                        />
                       
                    </Card>

                </div>
                
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
                <p className={classes.sectionText}>Fill out the form and I will respond with more information in 2-4 business days. All boards will be 2’x4’ in size using high quality 1/2” plywood for the top, and 1”x4” pine for the frame and legs.</p>
                
               <EmailForm />
                
                <p className={classes.sectionText}>
                    <a href="/gallery">View my work</a>
                </p>
            </div>
            
        </div>
    )
}