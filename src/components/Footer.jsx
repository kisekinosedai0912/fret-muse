import Email from '@mui/icons-material/Email';
import ContactPhone from '@mui/icons-material/ContactPhone';
import { LocationCity } from '@mui/icons-material';
import '../assets/css/main.css';

export default function Footer() {
    return (
        <footer className="flex items-center justify-evenly gap-[30px] w-full h-[15dvh] bg-[#262626] text-white font-outfit-small p-[12px]">
            {/* First footer content */}
            <div className="flex flex-col items-start justify-start gap-[4px] p-2">
                <p className="text-center font-manrope-light">
                    &copy; {new Date().getFullYear()} FretMuse, Your Guitar Mastery Partner. All rights reserved.
                </p>
                <p className='font-manrope-light'>Personal Project Idea built from React.Js</p>
            </div>

            {/* Second footer content */}
            <div className="flex flex-col items-start justify-start gap-[4px] p-2">
                <p className="text-center font-manrope-light">Job/Position: Web/Software Developer</p>
                <p className="text-center font-manrope-light">Status: Junior Developer</p>
            </div>

            {/* Third footer content */}
            <div className="flex flex-col gap-[10px]">
                <div className="flex items-center justify-start gap-[6px]">
                    <ContactPhone className="text-[#BFBFBF] text-xl" /> 
                    <span className="text-[#BFBFBF] font-manrope-light">09513546153</span>
                </div>
                <div className="flex items-center justify-start gap-[6px]">
                    <Email className="text-[#BFBFBF] text-xl" /> 
                    <span className="text-[#BFBFBF] font-manrope-light">
                        kisekinosedai0912@gmail.com
                    </span>
                </div>
                <div className="flex items-center justify-start gap-[6px]">
                    <LocationCity className="text-[#BFBFBF] text-xl" /> 
                    <span className="text-[#BFBFBF] font-manrope-light">
                        Purok Masagana, Pob. II,<br />
                        Sagay City, Negros Occidental
                    </span>
                </div>
            </div>
        </footer>
    );
}