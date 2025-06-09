import HomeLeftComponent from './components/LeftContainer';
import HomeRightComponent from './components/RightContainer';
import React from 'react';
import SEO from './components/SEO';

export default function Home() {
    return (
        <>
            <SEO 
                title="FretMuse – Master the Guitar Fretboard"
                description="Unlock the guitar fretboard! Learn notes and scales with interactive tools and speech assistance. Build fluency fast and master solos with confidence."
                url="https://fret-muse.vercel.app//home"
                image="https://fret-muse.vercel.app/images/fretmuse-og-image.jpg"
            />
            <HomeLeftComponent />
            <HomeRightComponent />
        </>
    )
};