import { ArrowDropDown } from "@mui/icons-material";
import MajorPos1 from "../assets/img/pos-1.png";
import MajorPos2 from "../assets/img/pos-2.png";
import MajorPos3 from "../assets/img/pos-3.png";
import MajorPos4 from "../assets/img/pos-4.png";
import MajorPos5 from "../assets/img/pos-5.png";

export default function ScalesPage() {
    return (
        <section id='parent-container' className="flex flex-col items-center justify-start mt-[100px] min-h-screen w-full snap-start">
            {/* Dropdown container */}
            <div id="filter-container" className="flex items-center justify-start gap-[100px] w-[92%] h-[60px]">
                <select className="py-[6px] w-[160px] font-outfit-small "
                    name="scale-dropdown" 
                    id="scale-dropdown" >
                    <option value="major-scale">Major Scale</option>
                    <option value="harmonic-minor-scale">Harmonic Minor Scale</option>
                    <option value="natural-minor-scale">Natural Minor Scale</option>
                    <option value="major-pentatonic-scale">Major Pentatonic Scale</option>
                    <option value="minor-pentatonic-scale">Minor Pentatonic Scale</option>
                    <option value="persian-scale">Persian Scale</option>
                    <option value="diminished-scale">Diminished Scale</option>
                </select>
                <select className="py-[6px] w-[160px] font-outfit-small "
                    name="mode-dropdown" 
                    id="mode-dropdown" >
                    <option value="modes">7 Modes</option>
                </select>
            </div>

            {/* Content container */}
            <div className="w-[92%] flex flex-col items-center justify-center gap-[20px] mt-[60px]">
                {/* First row */}
                <div className="flex gap-[20px]">
                    <img 
                        src={MajorPos1} 
                        alt="1st position" 
                        loading="lazy"
                        className="w-[450px] h-[220px] object-fit border border-[#262626] rounded-lg" 
                    />
                    <img 
                        src={MajorPos2}
                        alt="2nd position" 
                        loading="lazy"
                        className="w-[450px] h-[220px] object-fit border border-[#262626] rounded-lg" 
                    />
                    <img 
                        src={MajorPos3}
                        alt="3rd position" 
                        loading="lazy"
                        className="w-[450px] h-[220px] object-fit border border-[#262626] rounded-lg" 
                    />
                </div>
                
                {/* Second row */}
                <div className="flex gap-[20px] justify-center">
                    <img 
                        src={MajorPos4}
                        alt="4th position" 
                        loading="lazy"
                        className="w-[450px] h-[220px] object-fit border border-[#262626] rounded-lg" 
                    />
                    <img 
                        src={MajorPos5}
                        alt="5th position" 
                        loading="lazy"
                        className="w-[450px] h-[220px] object-fit border border-[#262626] rounded-lg" 
                    />
                </div>
            </div>
        </section>
    );
}