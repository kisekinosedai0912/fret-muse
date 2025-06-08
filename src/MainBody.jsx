import Home from './Home';
import FretPage from './components/FretPage';
import Scroller from './components/Scroller';
import ScalesPage from './components/Scales';
import Footer from './components/Footer';
import './assets/css/index.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Main() {
    const location = useLocation();
    const initialLoad = useRef(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Check if the screen is mobile or not
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // accessing the link to home page by default and scroll to other page link paths if selected
    useEffect(() => {
        if (initialLoad.current) {
            const homeSection = document.getElementById('home-wrapper');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'auto' });
            }
            initialLoad.current = false;
            return;
        }

        const sectionMap = {
            '/home': 'home-wrapper',
            '/fret-mastery': 'fret-wrapper',
            '/learn-scales': 'scale-wrapper'
        };

        const targetId = sectionMap[location.pathname];
        if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <main>
                {
                    // Home page: mobile or default based on screen state
                    isMobile ? (
                        // Mobile view
                        <section className="flex flex-col gap-[260px] p-4 min-h-screen bg-[#F5F5F5] snap-start" id="home-wrapper">
                            <Home />
                        </section>
                    ) : (
                        // Default view
                        <section className="flex gap-4 p-4 h-screen bg-[#F5F5F5] snap-start" id="home-wrapper">
                            <Home />
                        </section>
                    )
                }
                
                {/* Fret mastery page */}
                <section className="flex gap-4 p-4 h-screen snap-start" id="fret-wrapper">
                    <FretPage />
                </section>

                {/* Scales Page */}
                <section className={`flex gap-4 p-4 h-screen bg-[#F5F5F5] ${isMobile && 'mt-[44%]'} snap-start`} id="scale-wrapper">
                    <ScalesPage />
                </section>

                <Footer />
            </main>
            <Scroller />
        </>

    );
}
// Responsive main body done.