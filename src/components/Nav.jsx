import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/css/nav.css'; 
import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeLink, setActiveLink] = useState('/home');
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isActive = (path) => activeLink === path;

    // Sets active link based on the path currently in
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    const handleScroll = useCallback(() => {
        const sections = {
            'home-wrapper': '/home',
            'fret-wrapper': '/fret-mastery',
            'scale-wrapper': '/learn-scales'
        };

        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        Object.entries(sections).forEach(([sectionId, path]) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const { top, bottom } = element.getBoundingClientRect();
                if (top <= viewportHeight/2 && bottom >= viewportHeight/2) {
                    setActiveLink(path);
                }
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        setIsVisible(true);

        // Default view to home after page load
        const target = document.getElementById('home-wrapper');
        if (target && location.pathname === '/home') {
            target.scrollIntoView({ behavior: 'auto' });
        }
    }, []);

    const handleLinkRouting = (e, targetId, path) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(path);

            window.history.pushState({}, '', path); // prevents page reload while changing page
        }
        setIsOpen(false);
    };

    const handleLogoClick = (e) => {
        handleLinkRouting(e, 'home-wrapper', '/home');
    };

    return (
        <header className={`w-full fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] opacity-0 
            ${isVisible ? 'nav-appear' : ''}`}>
            <nav className="w-full flex items-center justify-between px-[20px] py-[14px] bg-[#A9BF9F]">
                {/* Left section: Hamburger + Site name */}
                <div className="flex items-center space-x-3 justify-between w-[230px] ml-[20px]">
                    {/* Hamburger menu */}
                    <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-[18%] h-6 flex flex-col gap-[10px] justify-between cursor-pointer"
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-full h-[1px] bg-black transition-all duration-300 origin-left
                            ${isOpen ? 'rotate-45 translate-x-[2px] translate-y-[-2px]' : ''} border border-[#262626] bg-[#262626]`} 
                        />
                        <span className={`w-[55%] h-[1px] bg-black transition-all duration-300
                            ${isOpen ? 'opacity-0' : ''} border border-[#262626] bg-[#262626]`} 
                        />
                        <span className={`w-full h-[1px] bg-black transition-all duration-300 origin-left
                            ${isOpen ? '-rotate-45 translate-x-[2px] translate-y-[2px]' : ''} border border-[#262626] bg-[#262626]`} 
                        />
                    </div>

                    {/* Dropdown menu */}
                    <div className={`absolute top-full left-0 w-52 overflow-hidden transition-all duration-300 ease-out
                        ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className={`glassmorphism rounded-b-md p-[16px] shadow-lg transform transition-transform duration-300
                            ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                            <Link 
                                to="/home" 
                                className="font-outfit no-underline block px-5 py-4 text-[#262626] hover:bg-[#8fa584] transition-colors duration-200 font-outfit border-b border-[#8fa584] flex items-center"
                                onClick={(e) => handleLinkRouting(e, 'home-wrapper', '/home')}
                            >
                                <HomeIcon className="text-[#262626] text-xl mr-[4px]" />
                                Home
                            </Link>
                            <Link 
                                to="/home" 
                                className="font-outfit no-underline block px-5 py-4 text-[#262626] hover:bg-[#8fa584] transition-colors duration-200 font-outfit border-b border-[#8fa584] flex items-center"
                                onClick={(e) => handleLinkRouting(e, 'fret-wrapper', '/fret-mastery')}
                            >
                                <MusicNoteIcon className="text-[#262626] text-xl mr-[4px]" />
                                Fret Mastery
                            </Link>
                            <Link 
                                to="/home" 
                                className="font-outfit no-underline block px-5 py-4 text-[#262626] hover:bg-[#8fa584] transition-colors duration-200 font-outfit border-b border-[#8fa584] flex items-center"
                                onClick={(e) => handleLinkRouting(e, 'scale-wrapper', '/learn-scales')}
                            >
                                <SchoolIcon className="text-[#262626] text-xl mr-[4px]" />
                                Learn Scales
                            </Link>
                        </div>
                    </div>

                    <Link 
                        to="/home"
                        onClick={handleLogoClick}
                        className="text-lg font-satisfy text-[#262626] cursor-pointer hover:opacity-80 transition-opacity"
                        id="webName"
                    >
                        Fret Muse
                    </Link>
                </div>

                {/* Center section: Nav Links */}
                <ul className={`${isMobile && 'hidden'} flex-1 flex items-center justify-center gap-[20px] list-none mb-[10px]`}>
                    <li>
                        <Link 
                            to="/home"
                            className={`nav-link font-outfit ${isActive('/home') ? 'active' : ''}`}
                            onClick={(e) => handleLinkRouting(e, 'home-wrapper', '/home')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/fret-mastery"
                            className={`nav-link font-outfit ${isActive('/fret-mastery') ? 'active' : ''}`}
                            onClick={(e) => handleLinkRouting(e, 'fret-wrapper', '/fret-mastery')}
                        >
                            Fret Mastery
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/learn-scales"
                            className={`nav-link font-outfit ${isActive('/learn-scales') ? 'active' : ''}`}
                            onClick={(e) => handleLinkRouting(e, 'scale-wrapper', '/learn-scales')}
                        >
                            Learn Scales
                        </Link>
                    </li>
                </ul>

                {/* Right section: Optional socmed accounts */}
                <div className="w-[340px] flex space-x-4 items-center justify-center overflow-x-hidden">
                   <a href="https://www.facebook.com/jasper.perks" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FacebookIcon className="text-[#262626] hover:text-gray-600" />
                    </a>
                    <a href="mailto:kisekinosedai0912@gmail.com" aria-label="Email">
                        <EmailIcon className="text-[#262626] hover:text-gray-600" />
                    </a>
                </div> 
            </nav>
        </header>
    );
}
// Responsive nav done.