import '../assets/css/main.css';
import { useState, useEffect } from 'react';

export default function LeftContainer() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

   return (
        <>  
            <section className="flex-1 flex flex-col gap-4 max-h-[calc(100vh-96px)] relative mt-[80px]">
                <div 
                    id="box-1" 
                    className={`absolute h-1/3 min-h-[200px] md:ml-[36%] ml-[26%] mr-[-10%] mt-[6%] 
                        border border-[#262626] rounded-lg z-[1] w-[70%] 
                        ${isVisible ? 'slide-top' : ''}`}
                ></div>

                <div 
                    id="box-2" 
                    className={`absolute h-1/3 min-h-[200px] md:ml-[12%] ml-[8%] border-2 
                        border-[#A9BF9F] mt-[21%] rounded-lg z-[2] w-[85%] 
                        flex flex-col items-center justify-center
                        ${isVisible ? 'slide-middle' : ''}`}
                >
                    <div className={`max-w-[80%] text-center ${isVisible ? 'fade-text' : ''}`}>
                        <p className="font-outfit text-[#1A1A1A]">
                            Your one and only free website to 
                            <b className="text-[#012E40]"> Master</b> your 
                            <b className="text-[#012E40]"> Guitar,</b>
                        </p>
                        <p className="font-outfit text-[#1A1A1A]">
                            Take your guitar skills to the 
                            <b className="text-[#D90404]"> Next Level!</b>
                        </p>
                    </div>
                </div>

                <div 
                    id="box-3" 
                    className={`absolute h-1/3 min-h-[150px] ml-[30%] md:w-[40%] w-[50%] 
                        ${!isMobile ? 'mt-[45%]' : 'mt-[64%]'} border border-[#262626] rounded-lg z-[3]
                        ${isVisible ? 'slide-bottom' : ''}`}
                ></div>
            </section>
        </>
    );
}
// Responsive left component done.