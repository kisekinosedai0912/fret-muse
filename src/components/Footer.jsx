import Email from '@mui/icons-material/Email';
import ContactPhone from '@mui/icons-material/ContactPhone';
import { LocationCity } from '@mui/icons-material';
import '../assets/css/main.css';
import { useState, useEffect, useRef } from 'react';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

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

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <footer ref={footerRef} className="flex items-center justify-evenly gap-[30px] w-full h-[15dvh] bg-[#262626] text-white font-outfit-small p-[12px]">
            {/* First footer content */}
            <div className="flex flex-col items-start justify-start gap-[4px] p-2">
                <p className={`text-center font-manrope-light ${isVisible ? 'slide-text' : 'opacity-0'}`}
                   style={{ animationDelay: '0.4s' }}>
                    &copy; {new Date().getFullYear()} <b>FretMuse</b>, Your Guitar Mastery Partner. All rights reserved.
                </p>
                <p className={`font-manrope-light ${isVisible ? 'slide-text' : 'opacity-0'}`}
                   style={{ animationDelay: '0.3s' }}>
                    Personal Project Idea built from <b>React.Js</b>
                </p>
            </div>

            {/* Second footer content */}
            <div className="flex flex-col items-start justify-start gap-[4px] p-2">
                <p className={`text-center font-manrope-light ${isVisible ? 'slide-text' : 'opacity-0'}`}
                   style={{ animationDelay: '0.2s' }}>
                    <b>Job/Position:</b> Web/Software Developer
                </p>
                <p className={`text-center font-manrope-light ${isVisible ? 'slide-text' : 'opacity-0'}`}
                   style={{ animationDelay: '0.1s' }}>
                    <b>Status:</b> Junior Developer
                </p>
                <p className={`text-center font-manrope-light ${isVisible ? 'slide-text' : 'opacity-0'}`}
                   style={{ animationDelay: '0.1s' }}>
                    <b>Tech Stack Used:</b> React Js + Vite, Tailwind CSS + CSS & MUI
                </p>
            </div>

            {/* Third footer content */}
            <div className="flex flex-col gap-[10px]">
                <div className={`flex items-center justify-start gap-[6px] ${isVisible ? 'slide-text' : 'opacity-0'}`}>
                    <ContactPhone className="text-[#BFBFBF] text-xl" /> 
                    <span className="text-[#BFBFBF] font-manrope-light">09513546153</span>
                </div>
                <div className={`flex items-center justify-start gap-[6px] ${isVisible ? 'slide-text' : 'opacity-0'}`}
                     style={{ animationDelay: '0.1s' }}>
                    <Email className="text-[#BFBFBF] text-xl" /> 
                    <span className="text-[#BFBFBF] font-manrope-light">kisekinosedai0912@gmail.com</span>
                </div>
                <div className={`flex items-center justify-start gap-[6px] ${isVisible ? 'slide-text' : 'opacity-0'}`}
                     style={{ animationDelay: '0.2s' }}>
                    <LocationCity className="text-[#BFBFBF] text-xl" /> 
                    <span className="text-[#BFBFBF] font-manrope-light">
                        Purok Masagana, Pob. II,<br />
                        Sagay City, Negros Occidental
                    </span>
                </div>
            </div>
        </footer>
    );
}