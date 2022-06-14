import React, { useState, useCallback } from "react";
import { makeStyles } from '@mui/styles';
import Gallery from 'react-photo-gallery-react17'; 
import Carousel, { Modal, ModalGateway } from "react-images";

const useStyles = makeStyles(theme => ({
    section: {
        height: "1100px",
        background: "#8090c2",
        color: "white"
    },

    sectionHeader: {
        fontSize: "56px",
        margin: "auto",
        textAlign: "center",
        width: "98%",
        paddingTop: "80px"
    }
}));

const photos = [
    {
        src: "/images/yankeesChiefs1.jpeg",
        width: 2,
        height: 2
    },
    {
        src: "/images/giantsMets1.jpeg",
        width: 2,
        height: 2
    },
    {
        src: "/images/philliesEagles1.jpeg",
        width: 2,
        height: 2
    },
    {
        src: "/images/yankeesChiefs2.jpeg",
        width: 2,
        height: 2
    },
    {
        src: "/images/giantsMets2.jpeg",
        width: 2,
        height: 2
    },
    {
        src: "/images/chiefs1.jpeg",
        width: 2,
        height: 2
    },
    {
        src: "/images/giantsMets3.jpeg",
        width: 2,
        height: 2
    },
    {
        src: "/images/yankees1.jpeg",
        width: 2,
        height: 2
    }
];

export default function PhotoGallery() {
    const classes = useStyles();

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return(
        <div>
            <div className={classes.section}>
                <h2 className={classes.sectionHeader}>Gallery</h2>
                <p 
                    style={{
                        textAlign: "center"
                    }}
                >
                    View some of my previous work
                </p>

                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>

            </div>

        </div>
    )

}
