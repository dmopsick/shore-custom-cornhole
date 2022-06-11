import React from 'react';
import { makeStyles } from '@mui/styles';
import Gallery from 'react-photo-gallery-react17'; 

const useStyles = makeStyles(theme => ({
    section: {
        height: "1000px",
        background: "#80b1c2"
    },

    sectionHeader: {
        fontSize: "56px",
        margin: "auto",
        textAlign: "center",
        width: "98%"
    }
}));

const photos = [
    {
        src: "/images/yankeesChiefs1.jpeg",
        width: 1,
        height: 1
    },
    {
        src: "/images/giantsMets1.jpeg",
        width: 1,
        height: 1
    },
    {
        src: "/images/philliesEagles1.jpeg",
        width: 1,
        height: 1
    },
    {
        src: "/images/yankeesChiefs2.jpeg",
        width: 1,
        height: 1
    },
    {
        src: "/images/giantsMets2.jpeg",
        width: 1,
        height: 1
    },
    {
        src: "/images/chiefs1.jpeg",
        width: 1,
        height: 1
    },
    {
        src: "/images/giantsMets3.jpeg",
        width: 1,
        height: 1
    },
    {
        src: "/images/yankees1.jpeg",
        width: 1,
        height: 1
    }
]

export default function PhotoGallery() {
    const classes = useStyles();

    return(
        <div>
            <div className={classes.section}>
                <h1 className={classes.sectionHeader}>Gallery</h1>
                <p 
                    style={{
                        textAlign: "center"
                    }}
                >Get some inspiration for your order from previous work.</p>

                <Gallery photos={photos} />

            </div>

        </div>
    )

}
