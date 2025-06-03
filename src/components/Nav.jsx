import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/css/nav.css'; 

export default function Nav() {
    return (
        <header className="w-full fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5]">
            <nav className="w-full flex items-center justify-between px-[20px] py-[10px] bg-[#A9BF9F]">
                {/* Left section: Hamburger + Site Name */}
                <div className="flex items-center space-x-3 justify-between w-[230px]">
                    <button type="button">
                        <MenuIcon />
                    </button>
                    <span className="text-lg font-satisfy" id="webName">Fret Muse</span>
                </div>

                {/* Center section: Nav Links */}
                <ul className="flex-1 flex items-center justify-center gap-[20px] list-none">
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
