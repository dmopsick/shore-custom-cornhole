import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../logo.svg';
import { AppBar, Toolbar, IconButton, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    navBar: {
        background: "#000000",
        paddingRight: "0px !important",
        height: "80px",
        color: "white"
    },

    header: {
        fontFamily: "Bebas Neue !important",
        fontWeight: "bold !important",
        fontSize: "28px",
        color: "white",
        textDecoration: "none"
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
                            <IconButton
                                edge="start"
                                aria-label="home"
                                style={{
                                    marginRight: "5px"
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            Shore Custom Cornhole
                        </a>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
    </React.Fragment>

    )
}