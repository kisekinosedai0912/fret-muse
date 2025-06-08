import '../assets/css/main.css';
import jazzmaster from '../assets/img/jazzmaster(no-bg).png';
import lespaul from '../assets/img/lespaul(no-bg).png';
import hss from '../assets/img/HSS(no-bg).png';
import superstrat from '../assets/img/superstrat.png';
import sg from '../assets/img/sg(no-bg).png';
import { useEffect, useState } from 'react';

export default function RightContainer() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedGuitar, setSelectedGuitar] = useState('jazzmaster');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pyramidBoxes = [
        { id: 'lespaul', src: lespaul, alt: "les paul guitar", width: "w-[70px]", name: "Les Paul" },
        { id: 'jazzmaster', src: jazzmaster, alt: "jazz master guitar", width: "w-[120px]", name: "Jazz Master" },
        { id: 'hss', src: hss, alt: "HSS Stratocaster guitar", width: "w-[100px]", name: "HSS Stratocaster" },
        { id: 'superstrat', src: superstrat, alt: "Super Stratocaster Ibanez guitar", width: "w-[110px]", name: "Super Stratocaster" },
        { id: 'sg', src: sg, alt: "Gibson SG guitar", width: "w-[100px]", name: "Gibson SG" }
    ];

    const handleGuitarSelect = (guitarId) => {
        setSelectedGuitar(guitarId);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* Right container - image container */}
            <section className="flex-1 flex flex-col justify-between z-[4] relative mt-[40px] h-[calc(100vh-82px)]">
                {/* Guitar image container */}
                <div className="flex-1 flex items-start justify-center">
                    <div className={`mt-[-2%] flex flex-col items-center ${isVisible ? 'slide-guitar' : ''}`}>
                        <div className="w-[700px] h-[500px] flex items-center justify-center"> 
                            <img 
                                src={pyramidBoxes.find(g => g.id === selectedGuitar).src} 
                                alt={pyramidBoxes.find(g => g.id === selectedGuitar).alt} 
                                loading='lazy'
                                className="max-w-[700px] max-h-[500px] w-auto h-auto object-contain mix-blend-multiply 
                                    transition-all duration-300"
                            />
                        </div>
                    </div>
                    {/* Guitar name */}
                    <span 
                        id="guitarName" 
                        className={`absolute ${isMobile ? 'right-[30px] top-[360px]' : 'right-[280px] top-[410px]'}  font-outfit text-xl 
                            px-[10px] bg-[#736C12] text-white ${isVisible ? 'slide-guitar-name' : ''}`}
                        style={{
                            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
                        }}
                    >
                        {pyramidBoxes.find(g => g.id === selectedGuitar).name}
                    </span>
                </div>

                {/* pyramid containers */}
                <div className={`w-full ${!isMobile && 'overflow-x-hidden overflow-y-hidden'} overflow-x-auto scrollbar-none`}>
                    <div className={`
                        flex items-end gap-4 
                        ${isMobile ? 'justify-start px-4 min-w-max' : 'justify-center'} 
                        pb-[${isMobile ? '20px' : '5%'}]
                    `}>
                        {pyramidBoxes.map((guitar, index) => (
                            <div 
                                key={guitar.id}
                                onClick={() => handleGuitarSelect(guitar.id)}
                                className={`
                                    flex-shrink-0
                                    flex items-center justify-center 
                                    w-[120px] 
                                    ${selectedGuitar === guitar.id 
                                        ? 'h-[140px] bg-[#748E67]' 
                                        : 'h-[120px] bg-[#A9BF9F] hover:bg-[#748E67] hover:h-[140px]'
                                    } 
                                    border-2 border-[#A9BF9F] rounded-lg 
                                    transition-all duration-300 cursor-pointer
                                    opacity-0 ${isVisible ? `paper-fly-${index + 1}` : ''}
                                `}
                            >
                                <img 
                                    src={guitar.src}
                                    alt={guitar.alt}
                                    loading='lazy'
                                    className={`
                                        ${guitar.width} h-auto object-contain mix-blend-multiply z-7
                                        ${guitar.rotate ? 'transform rotate-[-90deg]' : ''}
                                        transition-transform duration-300
                                    `}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
// Responsive right component done.