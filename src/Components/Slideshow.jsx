import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import SlideItem from "./SlideItem";
import {imageSources} from "../podatki";

export default function Slideshow() {

    return (
        <Carousel
            autoPlay={true}
            emulateTouch={true}
            showThumbs={false}
        >

            {imageSources.map((element, index) => {
                return (<SlideItem
                        key={index}
                        imgSrc={element}
                    />
                )
            })}

        </Carousel>
    )
}