import { useState, useEffect } from 'react';

export default function ScaleImage({ img, alt, position }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col items-start gap-2">
            <span className="font-outfit text-[#262626]"><b>{position}</b></span>
            <img 
                src={img}
                alt={alt}
                loading="lazy"
                className={`${isMobile ? 'w-[364px] h-[200px]' : 'w-[450px] h-[220px]'} object-fit border border-[#262626] rounded-lg`} 
            />
        </div>
    );
}
// Responsive images done.