import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import '../assets/css/main.css'; 

export default function Scroll() {
    const [isBottom, setIsBottom] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;

            setIsBottom(Math.ceil(scrollPosition) >= scrollableHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        if (isBottom) {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Scroll to bottom
            const currentPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            window.scrollTo({ 
                top: currentPosition + viewportHeight,
                behavior: 'smooth' 
            });
        }
    };

    return (
        <div onClick={handleClick} className={`fixed bottom-[4px] ${!isMobile ? 'left-[40px] w-[3%] h-[7%]' : 'right-[2px] w-[10%] h-[8%]'} z-50 bg-[#736C12] cursor-pointer 
                                              p-2 hover:scale-110 transition-transform duration-200 flex 
                                              flex-col items-center justify-center gap-2`}
        >
            <span className="font-outfit-small" id="scroll">Scroll</span>
            {isBottom ? (
                <ArrowUpwardIcon id="scroll-up" />
            ) : (
                <ArrowDownwardIcon id="scroll-down" />
            )}
        </div>
    );
}
// Responsive scroller component done.