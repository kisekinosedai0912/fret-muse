import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/css/nav.css'; 
import { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5]">
            <nav className="w-full flex items-center justify-between px-[20px] py-[14px] bg-[#A9BF9F]">
                {/* Left section: Hamburger + Site Name */}
                <div className="flex items-center space-x-3 justify-between w-[230px] ml-[20px]">
                    {/* Hamburger Menu */}
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

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 w-48 overflow-hidden transition-all duration-300 ease-out
                        ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className={`glassmorphism rounded-b-md p-[10px] shadow-lg transform transition-transform duration-300
                            ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                            <a href="#" className="no-underline block px-4 py-3 text-[#262626] hover:bg-[#8fa584] transition-colors duration-200 font-outfit border-b border-[#8fa584] flex items-center gap-3">
                                <HomeIcon className="text-[#262626] text-xl mr-[4px]" />
                                Home
                            </a>
                            <a href="#" className="no-underline block px-4 py-3 text-[#262626] hover:bg-[#8fa584] transition-colors duration-200 font-outfit border-b border-[#8fa584] flex items-center gap-3">
                                <MusicNoteIcon className="text-[#262626] text-xl mr-[4px]" />
                                Fret Mastery
                            </a>
                            <a href="#" className="no-underline block px-4 py-3 text-[#262626] hover:bg-[#8fa584] transition-colors duration-200 font-outfit flex items-center gap-3">
                                <SchoolIcon className="text-[#262626] text-xl mr-[4px]" />
                                Learn Scales
                            </a>
                        </div>
                    </div>

                    <span className="text-lg font-satisfy" id="webName">Fret Muse</span>
                </div>

                {/* Center section: Nav Links */}
                <ul className="flex-1 flex items-center justify-center gap-[20px] list-none mb-[10px]">
                    <li><a href="#" className="no-underline hover:text-red text-[#262626] font-outfit">Home</a></li>
                    <li><a href="#" className="no-underline hover:text-red text-[#262626] font-outfit">Fret Mastery</a></li>
                    <li><a href="#" className="no-underline hover:text-red text-[#262626] font-outfit">Learn Scales</a></li>
                </ul>

                {/* Right section: Empty or optional future content */}
                <div className="w-[340px] flex space-x-4 items-center justify-center overflow-x-hidden">
                   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FacebookIcon className="text-[#262626] hover:text-gray-600" />
                    </a>
                    <a href="mailto:your-email@gmail.com" aria-label="Email">
                        <EmailIcon className="text-[#262626] hover:text-gray-600" />
                    </a>
                </div> 
            </nav>
        </header>
    );
}
