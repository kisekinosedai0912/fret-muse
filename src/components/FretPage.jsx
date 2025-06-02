import { useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Faqs from './Faqs';
import '../assets/css/fretpage.css';

export default function FretPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    
    const handleClickEvent = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <section id='parent-container' className="flex flex-col items-center justify-center gap-[10px] h-screen w-full snap-start">
            {/* Playlist section */}
            <section className="flex items-center justify-center gap-[20px] h-[calc(80vh-80px)] w-full">
                <div className="w-[45%] mr-[4%] h-[60%] border border-[#A9BF9F] bg-[#A9BF9F] flex flex-col items-center justify-center p-2" id="speech-container">
                    <p className="mb-6 font-outfit">Master all the notes in your fretboard <br></br> <span className="ml-[22px]">with this speech assistance tool!</span></p>

                    {/* Speech input container */}
                    <div id="speech-input-container" className="w-[80%] h-[80px] border border-[#262626] rounded-lg flex items-center justify-center bg-white">
                        {/* Sound wave */}
                        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[60%] h-[2px] overflow-hidden">
                            {isPlaying && (
                                <div className="wave-container">
                                    <div className="sound-wave"></div>
                                </div>
                            )}
                        </div>
                        
                        {/* Play line */}
                        <div id="line" className="w-[40%] border border-[#736C12] mr-[20px]"></div>

                        {/* Play button */}
                        <button 
                            onClick={handleClickEvent}
                            className="hover:scale-110 transition-transform duration-200 z-10 bg-[#736C12]"
                            aria-label={isPlaying ? "Pause recording" : "Play recording"}
                        >
                            {isPlaying 
                                ? <PauseCircleIcon className="text-[#748E67] w-20 h-20" />
                                : <PlayCircleIcon className="text-[#748E67] w-20 h-20" />
                            }
                        </button>
                    </div>
                </div>
                <div className="w-[35%] h-[60%] border border-[#A9BF9F] border-2 flex flex-col items-center justify-center" id="notes-container">
                    <div id="stringNum-container">
                        <p className="text-[#262626] font-manrope">4th String</p>
                    </div>
                    <div id="note-container">
                        <p className="text-[#262626] font-manrope">G#</p>
                    </div>
                </div>
            </section>

            {/* Guitar facts section */}
            <section id='facts-container' className="flex items-center justify-center w-[86%] h-[calc(30vh-80px)] mt-[20px]">
                <Faqs />
            </section>
       </section>
    );
}