import Home from './Home';
import FretPage from './components/FretPage';
import Scroller from './components/Scroller';
import ScalesPage from './components/Scales';
import Footer from './components/Footer';
import './assets/css/index.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Main() {
    const location = useLocation();
    const initialLoad = useRef(true);

    // accessing the link to home page by default and scroll to other page link paths if selected
    useEffect(() => {
        if (initialLoad.current && location.pathname === '/fretmuse/home') {
            const homeSection = document.getElementById('home-wrapper');
            if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'auto' });
            }
            initialLoad.current = false;
            return;
        }

        // Link paths to other page
        const path = location.pathname;
        const sectionMap = {
            '/fretmuse/home': 'home-wrapper',
            '/fretmuse/fret-mastery': 'fret-wrapper',
            '/fretmuse/learn-scales': 'scale-wrapper'
        };

        const targetId = sectionMap[path];
        if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <main>
            {/* Home page */}
            <section className="flex gap-4 p-4 h-screen bg-[#F5F5F5] snap-start" id="home-wrapper">
                <Home />
            </section>
            
            {/* Fret mastery page */}
            <section className="flex gap-4 p-4 h-screen snap-start" id="fret-wrapper">
                <FretPage />
            </section>

            {/* Scales Page */}
            <section className="flex gap-4 p-4 h-screen bg-[#F5F5F5] snap-start" id="scale-wrapper">
                <ScalesPage />
            </section>

            <Footer />
            <Scroller />
        </main>
    );
}