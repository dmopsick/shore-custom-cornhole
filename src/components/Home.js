import React from 'react';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(theme => ({
    section: {
        height: "825px"
    },
    homeContainer: {
        color: "#c2b280",
        background: "#80b1c2",
        textAlign: "center"  
    }
}));

export default function Home() {
    const classes = useStyles();

    return(
        <div className={classes.homeContainer}>
            <div className={classes.section}>

                
            </div>
            
        </div>
    )
}