import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({


}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div style={{
            background: "#8090c2",
            color: "white",
            height: "100px",
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center"
        }}>
            <hr/>
            <a href="mailto:shorecustomcornhole@gmail.com">
                ShoreCustomCornhol@gmail.com
            </a>

        </div>
    )

}