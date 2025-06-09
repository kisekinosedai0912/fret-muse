import { useState, useEffect, useRef } from 'react';
import MajorPos1 from "../assets/img/pos-1.png";
import MajorPos2 from "../assets/img/pos-2.png";
import MajorPos3 from "../assets/img/pos-3.png";
import MajorPos4 from "../assets/img/pos-4.png";
import MajorPos5 from "../assets/img/pos-5.png";
import ScaleImage from './ScaleImage.jsx';
import HarmonicMinorPos1 from '../assets/img/h-pos1.png';
import HarmonicMinorPos2 from '../assets/img/h-pos2.png';
import HarmonicMinorPos3 from '../assets/img/h-pos3.png';
import HarmonicMinorPos4 from '../assets/img/h-pos4.png';
import HarmonicMinorPos5 from '../assets/img/h-pos5.png';
import HarmonicMinorPos6 from '../assets/img/h-pos6.png';
// import HarmonicMinorPos7 from '../assets/img/h-pos7.png';
import NaturalMinorPos1 from '../assets/img/n-pos1.png';
import NaturalMinorPos2 from '../assets/img/n-pos2.png';
import NaturalMinorPos3 from '../assets/img/n-pos3.png';
import NaturalMinorPos4 from '../assets/img/n-pos4.png';
import NaturalMinorPos5 from '../assets/img/n-pos5.png';
import MajorPentatonicPos1 from '../assets/img/mp-pos1.png';
import MajorPentatonicPos2 from '../assets/img/mp-pos2.png';
import MajorPentatonicPos3 from '../assets/img/mp-pos3.png';
import MajorPentatonicPos4 from '../assets/img/mp-pos4.png';
import MajorPentatonicPos5 from '../assets/img/mp-pos5.png';
import MinorPentatonicPos1 from '../assets/img/mnp-pos1.png';
import MinorPentatonicPos2 from '../assets/img/mnp-pos2.png';
import MinorPentatonicPos3 from '../assets/img/mnp-pos3.png';
import MinorPentatonicPos4 from '../assets/img/mnp-pos4.png';
import MinorPentatonicPos5 from '../assets/img/mnp-pos5.png';
import DiminishedPos1 from '../assets/img/d-pos1.png';
import DiminishedPos2 from '../assets/img/d-pos2.png';
import DiminishedPos3 from '../assets/img/d-pos3.png';
import DiminishedPos4 from '../assets/img/d-pos4.png';
import '../assets/css/scale.css';
import React from 'react';
import SEO from './SEO';

// Scake props arrays
const majorScale = [
    { img: MajorPos1, alt: "Major Scale Position 1", position: "Position 1" },
    { img: MajorPos2, alt: "Major Scale Position 2", position: "Position 2" },
    { img: MajorPos3, alt: "Major Scale Position 3", position: "Position 3" },
    { img: MajorPos4, alt: "Major Scale Position 4", position: "Position 4" },
    { img: MajorPos5, alt: "Major Scale Position 5", position: "Position 5" }
];

const harmonicMinorScale = [
    { img: HarmonicMinorPos1, alt: "Harmonic Minor Position 1", position: "Position 1" },
    { img: HarmonicMinorPos2, alt: "Harmonic Minor Position 2", position: "Position 2" },
    { img: HarmonicMinorPos3, alt: "Harmonic Minor Position 3", position: "Position 3" },
    { img: HarmonicMinorPos4, alt: "Harmonic Minor Position 4", position: "Position 4" },
    { img: HarmonicMinorPos5, alt: "Harmonic Minor Position 5", position: "Position 5" },
    { img: HarmonicMinorPos6, alt: "Harmonic Minor Position 6", position: "Position 6" },
    // { img: HarmonicMinorPos7, alt: "Harmonic Minor Position 7", position: "Position 7" }
];

const naturalMinorScale = [
    { img: NaturalMinorPos1, alt: "Natural Minor Position 1", position: "Position 1" },
    { img: NaturalMinorPos2, alt: "Natural Minor Position 2", position: "Position 2" },
    { img: NaturalMinorPos3, alt: "Natural Minor Position 3", position: "Position 3" },
    { img: NaturalMinorPos4, alt: "Natural Minor Position 4", position: "Position 4" },
    { img: NaturalMinorPos5, alt: "Natural Minor Position 5", position: "Position 5" }
];

const majorPentatonicScale = [
    { img: MajorPentatonicPos1, alt: "Major Pentatonic Position 1", position: "Position 1" },
    { img: MajorPentatonicPos2, alt: "Major Pentatonic Position 2", position: "Position 2" },
    { img: MajorPentatonicPos3, alt: "Major Pentatonic Position 3", position: "Position 3" },
    { img: MajorPentatonicPos4, alt: "Major Pentatonic Position 4", position: "Position 4" },
    { img: MajorPentatonicPos5, alt: "Major Pentatonic Position 5", position: "Position 5" }
];

const minorPentatonicScale = [
    { img: MinorPentatonicPos1, alt: "Minor Pentatonic Position 1", position: "Position 1" },
    { img: MinorPentatonicPos2, alt: "Minor Pentatonic Position 2", position: "Position 2" },
    { img: MinorPentatonicPos3, alt: "Minor Pentatonic Position 3", position: "Position 3" },
    { img: MinorPentatonicPos4, alt: "Minor Pentatonic Position 4", position: "Position 4" },
    { img: MinorPentatonicPos5, alt: "Minor Pentatonic Position 5", position: "Position 5" }
];

const diminishedScale = [
    { img: DiminishedPos1, alt: "Diminished Position 1", position: "Position 1" },
    { img: DiminishedPos2, alt: "Diminished Position 2", position: "Position 2" },
    { img: DiminishedPos3, alt: "Diminished Position 3", position: "Position 3" },
    { img: DiminishedPos4, alt: "Diminished Position 4", position: "Position 4" }
];

// Encapsulated filter element values in an object
const scalesData = {
    'major-scale': {
        name: 'Major Scale',
        images: majorScale,
        showModes: true
    },
    'harmonic-minor-scale': {
        name: 'Harmonic Minor Scale',
        images: harmonicMinorScale,
        showModes: false
    },
    'natural-minor-scale': {
        name: 'Natural Minor Scale',
        images: naturalMinorScale,
        showModes: false
    },
    'major-pentatonic-scale': {
        name: 'Major Pentatonic Scale',
        images: majorPentatonicScale,
        showModes: false
    },
    'minor-pentatonic-scale': {
        name: 'Minor Pentatonic Scale',
        images: minorPentatonicScale,
        showModes: false
    },
    'diminished-scale': {
        name: 'Diminished Scale',
        images: diminishedScale,
        showModes: false
    }
};

export default function ScalesPage() {
    const [selectedScale, setSelectedScale] = useState('major-scale');
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Split images into two rows this is done to ensure that the images are displayed in two rows
    const currentScaleImages = scalesData[selectedScale].images;
    const firstRow = currentScaleImages.slice(0, Math.ceil(currentScaleImages.length / 2));
    const secondRow = currentScaleImages.slice(Math.ceil(currentScaleImages.length / 2));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const renderScaleImages = (images) => {
        return images.map((item, index) => (
            <div 
                key={index}
                className={`opacity-0 ${isVisible ? 'deal-card' : ''}`}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
                <ScaleImage 
                    img={item.img}
                    alt={item.alt}
                    position={item.position}
                />
            </div>
        ));
    };

    return (
        <>
            <SEO 
                title="FretMuse – Master the Guitar Fretboard"
                description="Unlock the guitar fretboard! Learn notes and scales with interactive tools and speech assistance. Build fluency fast and master solos with confidence."
                url="https://fret-muse.vercel.app//home"
                image="https://fret-muse.vercel.app/images/fretmuse-og-image.jpg"
            />
            <section ref={componentRef} id='parent-container' 
                className={`relative flex flex-col items-center justify-start mt-[100px] min-h-screen w-full snap-start overflow-hidden`}
            >
                {/* Dropdown container */}
                <div id="filter-container" 
                    className={`flex items-center justify-start gap-[100px] w-[92%] h-[60px] opacity-0 
                        ${isVisible ? 'slide-filter' : ''}`}
                >
                    <select 
                        className="py-[6px] w-[160px] font-outfit-small bg-[#736C12]"
                        value={selectedScale}
                        onChange={(e) => setSelectedScale(e.target.value)}
                    >
                        {
                            Object.entries(scalesData).map(([key, { name }]) => (
                                <option key={key} value={key}>{name}</option>
                            ))
                        }
                    </select>

                    {/* Show only if filter value is major scale */}
                    {
                        scalesData[selectedScale].showModes && (
                        <select className="py-[6px] w-[160px] font-outfit-small bg-[#736C12]">
                            <option value="">Select Modes</option>
                            <option value="modes">7 Modes</option>
                        </select>
                        )
                    }
                </div>

                {/* Render layout based on screen state container */}
                { !isMobile 
                    ? 
                        <div className="w-[92%] flex flex-col items-center justify-center gap-[20px] mt-[20px]">
                            {/* First row */}
                            <div className="flex gap-[20px]">
                                {renderScaleImages(firstRow)}
                            </div>

                            {/* Second row */}
                            <div className="flex gap-[20px] justify-center">
                                {renderScaleImages(secondRow)}
                            </div>
                        </div>
                    :
                        <div className="relative w-[92%] h-[calc(100vh-200px)] overflow-hidden">
                            <div className="absolute inset-0 overflow-y-auto scale-content-container">
                                <div className="flex flex-col items-center gap-[20px] pb-[120px]">
                                    {/* First row */}
                                    <div className={`flex ${isMobile ? 'flex-col gap-[4px]' : 'gap-[20px]'}`}>
                                        {renderScaleImages(firstRow)}
                                    </div>

                                    {/* Second row */}
                                    <div className={`flex ${isMobile ? 'flex-col gap-[4px]' : 'gap-[20px]'} justify-center`}>
                                        {renderScaleImages(secondRow)}
                                    </div>
                                </div>
                            </div>
                            {/* Gradient overlay div */}
                            <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-gradient-to-t from-[rgba(245,245,245,0.2)] to-transparent pointer-events-none"></div>
                        </div>
                }
            </section>
        </>
    );
}
// Responsive scales page done.