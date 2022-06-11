import React from 'react';
import { makeStyles } from '@mui/styles';
 
const useStyles = makeStyles(theme => ({
    section: {
        height: "825px"
    },

    sectionHeader: {
        fontSize: "56px",
        margin: "auto",
        textAlign: "center",
        width: "98%"
    }
}));

export default function Gallery() {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.section}>
                <h1 className={classes.sectionHeader}>Gallery</h1>
                <p>Get some inspiration for your order from my previous work.</p>
            </div>

        </div>
    )

}
