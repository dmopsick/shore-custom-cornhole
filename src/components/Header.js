import { AppBar, Toolbar, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    navBar: {
        background: "#c2b280",
        paddingRight: "0px !important",
        height: "80px",
        color: "white"
    },

    header: {
        fontFamily: "Lato !important",
        fontWeight: "bold !important",
        fontSize: "32px",
        color: "white",
        textDecoration: "none",
        margin: "auto"
    }
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar className={classes.navBar}>
                        <a className={classes.header} href ="/">       
                            Shore Custom Cornhole
                        </a>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
    </React.Fragment>

    )
}

export function HideOnScroll(props) {
    const {children} = props;
    
    const trigger = useScrollTrigger({
        target: window
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
