import '../assets/css/main.css';
import jazzmaster from '../assets/img/jazzmaster(no-bg).png';
import lespaul from '../assets/img/lespaul(no-bg).png';
import hss from '../assets/img/HSS(no-bg).png';
import superstrat from '../assets/img/superstrat.png';
import sg from '../assets/img/sg(no-bg).png';
import { useEffect, useState } from 'react';

export default function RightContainer() {
    const [isVisible, setIsVisible] = useState(false);

    const pyramidBoxes = [
        { src: lespaul, alt: "les paul guitar", width: "w-[80px]" },
        { src: jazzmaster, alt: "jazz master guitar", width: "w-[120px]", active: true },
        { src: hss, alt: "HSS Stratocaster guitar", width: "w-[110px]" },
        { src: superstrat, alt: "Super Stratocaster Ibanez guitar", width: "w-[120px]", rotate: true },
        { src: sg, alt: "Gibson SG guitar", width: "w-[110px]", rotate: true }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            {/* Right container - image container */}
            <section className="flex-1 flex-col z-[4] relative mt-[40px]">
                <div className="h-full max-h-[calc(100vh-82px)] flex items-start justify-center">
                    <div className={`mt-[-17%] flex flex-col items-center ${isVisible ? 'slide-guitar' : ''}`}>
                        <img 
                            src={jazzmaster} 
                            alt="jazz master guitar" 
                            loading='lazy'
                            className="w-[700px] h-auto object-contain mix-blend-multiply"
                        />
                    </div>
                    <span 
                        id="guitarName" 
                        className={`absolute right-[320px] top-[410px] font-outfit text-xl 
                            px-[10px] bg-[#736C12] text-white ${isVisible ? 'slide-guitar-name' : ''}`}
                        style={{
                            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
                        }}
                    >
                        Jazz Master
                    </span>
                </div>

                {/* pyramid containers */}
                <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex items-end gap-4 justify-center">
                    {pyramidBoxes.map((guitar, index) => (
                        <div 
                            key={guitar.alt}
                            className={`
                                flex items-center justify-center 
                                w-[120px] 
                                ${guitar.active ? 'h-[140px] bg-[#748E67]' : 'h-[120px] bg-transparent hover:bg-[#A9BF9F] hover:h-[140px]'} 
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
                                `}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}