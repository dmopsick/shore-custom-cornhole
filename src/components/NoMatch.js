import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

    container: {
        background: "#80c2b2",
        color: "white",
        paddingTop: "100px",
        height:"800px",
        fontSize: "24px"
    },

    header: {
        width: "85%",
        margin: "auto",
        textAlign: "center"
    }


}));

export default function NoMatch() {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <h1 className={classes.header}>404 Error - Page Not Found</h1>
            <p
                style={{
                    width: "80%",
                    margin: "auto",
                    textAlign: "center"
                }}  
            >We cannot find what you are looking for.</p> 
            <p  style={{
                    width: "80%",
                    margin: "auto",
                    textAlign: "center"
                }}  
            >
                <a href="/">Return Home</a>
            </p>
            
        </div>
    )

}
