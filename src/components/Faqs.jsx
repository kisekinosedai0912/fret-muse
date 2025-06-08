import '../assets/css/fretpage.css';
import { useEffect, useState } from 'react';

export default function Faqs() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className={`flex ${isMobile && 'flex-col'} gap-[10px] w-full`}>
                <div className="flex-1 p-[8px] h-[150px] glass-orange rounded-lg" id='quotes'>
                    <p className='font-outfit-bold'>Keith Richards</p>
                    <p className='font-outfit-small'>– “you’re always learning about this thing every time you pick it up”</p>
                </div>
                <div className="flex-1 h-[150px] p-[8px] glass-orange rounded-lg" id='quotes'>
                    <p className='font-outfit-bold'>Jimmy Page</p>
                    <p className='font-outfit-small'>– “I believe every guitar player inherently has something unique about their playing. They just have to identify what makes them different and develop it.”</p>
                </div>
                <div className="flex-1 h-[150px] p-[8px] glass-orange rounded-lg" id='quotes'>
                    <p className='font-outfit-bold'>John Mayer</p>
                    <p className='font-outfit-small'>– “Playing music to me is as close to having super powers as you can have.”</p>
                </div>
                <div className="flex-1 h-[150px] p-[8px] glass-orange rounded-lg" id='quotes'>
                    <p className='font-outfit-bold'>Zakk Wylde</p>
                    <p className='font-outfit-small'>– “Great musicians, you don’t just hear them, you feel them. When I listen to Randy Rhoads, I feel every note. I learned a lot from him.”</p>
                </div>
            </section>
        </>
    );
};
// Responsive faqs component done.