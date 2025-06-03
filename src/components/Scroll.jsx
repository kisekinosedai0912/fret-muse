import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Scroll() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;

            // Check if we're at the bottom of the page
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
            window.scrollTo({ 
                top: document.documentElement.scrollHeight,
                behavior: 'smooth' 
            });
        }
    };

    return (
        <div 
            onClick={handleClick}
            className="fixed bottom-[4px] right-[40px] z-50 bg-[#736C12] cursor-pointer 
                        p-2 hover:scale-110 transition-transform duration-200 
                        flex flex-col items-center justify-center gap-2 w-[3%] h-[7%]"
        >
            <span className="font-outfit-small text-neutral-100">Scroll</span>
            {isBottom ? (
                <ArrowUpwardIcon className="text-neutral-100" />
            ) : (
                <ArrowDownwardIcon className="text-neutral-100" />
            )}
        </div>
    );
}