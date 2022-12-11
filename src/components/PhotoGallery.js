import React, { useState, useCallback } from "react";
import { makeStyles } from '@mui/styles';
import Gallery from 'react-photo-gallery-react17'; 
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from './Photos';

const useStyles = makeStyles(theme => ({
    section: {
        height: "100%",
        background: "#8090c2",
        color: "white",
        paddingBottom: "25px"
    },

    sectionHeader: {
        fontSize: "56px",
        margin: "auto",
        textAlign: "center",
        width: "98%"
    }
}));

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
            <div className='gallerySection darkBlueBackground'>
                <h2 className='sectionHeader topHeader'>Gallery</h2>
                <p className='sectionText centerText'>
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
