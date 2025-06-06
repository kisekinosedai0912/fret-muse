import { useState } from 'react';
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
import HarmonicMinorPos7 from '../assets/img/h-pos7.png';

const majorScale = [
    {
        img: MajorPos1,
        alt: '1st position',
    },
    {
        img: MajorPos2,
        alt: '2nd position',
    },
    {
        img: MajorPos3,
        alt: '3rd position',
    },
    {
        img: MajorPos4,
        alt: '4th position',
    },
    {
        img: MajorPos5,
        alt: '5th position',
    },
];

const harmonicMinorScale = [
    {
        img: HarmonicMinorPos1,
        alt: '1st position',
    },
    {
        img: HarmonicMinorPos2,
        alt: '2nd position',
    },
    {
        img: HarmonicMinorPos3,
        alt: '3rd position',
    },
    {
        img: HarmonicMinorPos4,
        alt: '4th position',
    },
    {
        img: HarmonicMinorPos5,
        alt: '5th position',
    },
    {
        img: HarmonicMinorPos6,
        alt: '6th position',
    },
    {
        img: HarmonicMinorPos7,
        alt: '7th position',
    },
];

export default function ScalesPage() {
    // Split major scale
    const firstMajorRow = majorScale.slice(0, 3);
    const secondMajorRow = majorScale.slice(3);
    // Split harmonic minor scale
    const firstHarmonicMinorRow = harmonicMinorScale.slice(0, 4);
    const secondHarmonicMinorRow = harmonicMinorScale.slice(4);

    const [selectedScale, setSelectedScale] = useState('major-scale');

    return (
        <section id='parent-container' className="flex flex-col items-center justify-start mt-[100px] min-h-screen w-full snap-start">
            {/* Dropdown container */}
            <div id="filter-container" className="flex items-center justify-start gap-[100px] w-[92%] h-[60px]">
                <select className="py-[6px] w-[160px] font-outfit-small "
                    name="scale-dropdown" 
                    value={selectedScale}
                    id="scale-dropdown" 
                    onChange={(e) => setSelectedScale(e.target.value)}
                >
                    <option value="major-scale">Major Scale</option>
                    <option value="harmonic-minor-scale">Harmonic Minor Scale</option>
                    <option value="natural-minor-scale">Natural Minor Scale</option>
                    <option value="major-pentatonic-scale">Major Pentatonic Scale</option>
                    <option value="minor-pentatonic-scale">Minor Pentatonic Scale</option>
                    <option value="persian-scale">Persian Scale</option>
                    <option value="diminished-scale">Diminished Scale</option>
                </select>

                {/* Show only if filter value is major scale */}
                {selectedScale === 'major-scale' && (
                    <select 
                        className="py-[6px] w-[160px] font-outfit-small"
                        name="mode-dropdown" 
                        id="mode-dropdown"
                    >
                        <option value="">Select Modes</option>
                        <option value="modes">7 Modes</option>
                    </select>
                )}
            </div>

            {/* Content container */}
            <div className="w-[92%] flex flex-col items-center justify-center gap-[20px] mt-[60px]">
                {/* First row */}
                <div className="flex gap-[20px]">
                    {
                        firstMajorRow.map((item, index) => (
                            <ScaleImage 
                                key={index}
                                img={item.img}
                                alt={item.alt}
                            />
                        ))
                    }
                </div>
                
                {/* Second row */}
                <div className="flex gap-[20px] justify-center">
                    {
                        secondMajorRow.map((item, index) => (
                            <ScaleImage 
                                key={index}
                                img={item.img}
                                alt={item.alt}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}