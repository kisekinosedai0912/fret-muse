import { useState, useEffect, useRef } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Faqs from './Faqs';
import '../assets/css/fretpage.css';

export default function FretPage() {
    const fretboardNotes = [
        // 1st String (High E)
        { string: '1st String', notes: ['E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb'] },
        // 2nd String (B)
        { string: '2nd String', notes: ['B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb'] },
        // 3rd String (G)
        { string: '3rd String', notes: ['G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb'] },
        // 4th String (D)
        { string: '4th String', notes: ['D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db',] },
        // 5th String (A)
        { string: '5th String', notes: ['A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',] },
        // 6th String (Low E)
        { string: '6th String', notes: ['E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb',] }
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentNote, setCurrentNote] = useState(getRandomNote());
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Randomizing notes
    function getRandomNote() {
        const randomString = fretboardNotes[Math.floor(Math.random() * fretboardNotes.length)];
        const randomNote = randomString.notes[Math.floor(Math.random() * randomString.notes.length)];
        return { string: randomString.string, note: randomNote };
    };

    // Speech synthesis API setup
    const speak = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance();
 
            let formattedNote = text.note;

            if (formattedNote.includes('#')) {
                formattedNote = formattedNote.replace('#', ' sharp');
            } else if (formattedNote.includes('b')) {
                formattedNote = formattedNote.replace('b', ' flat');
            }

            utterance.text = `${text.string} ${formattedNote}`;
            utterance.rate = 0.8; 
            utterance.pitch = 1;
            utterance.lang = 'en-US'; 
            window.speechSynthesis.cancel(); 
            window.speechSynthesis.speak(utterance);
        }
    };

    useEffect(() => {
        let intervalId;

        if (isPlaying) {
            speak(currentNote);
            
            intervalId = setInterval(() => {
                const newNote = getRandomNote();
                setCurrentNote(newNote);
                speak(newNote);
            }, 3000); 
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
            window.speechSynthesis.cancel(); // Stop speaking when component unmounts or isPlaying changes
        };
    }, [isPlaying]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // start animation after user scrolls on the page
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2
            }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);
    
    const handleClickEvent = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <section id='parent-container' className={`flex flex-col items-center justify-center ${isMobile ? 'gap-[40px]' : 'gap-[10px]' } h-screen w-full snap-start`}>
            {/* Playlist section */}
            <section ref={componentRef} className={`flex ${!isMobile ? 'items-center justify-center' : 'items-start justify-center' } ${!isMobile ? 'gap-[20px]' : 'gap-[4px]'} h-[calc(80vh-80px)] w-full`}>
                <aside className={`w-[45%] mr-[4%] h-[60%] border border-[#A9BF9F] 
                                bg-[#A9BF9F] flex flex-col items-center justify-center p-2 
                                opacity-0 ${isVisible ? 'roll-right' : ''}`} 
                                id="speech-container">
                                    {/* center text if in mobile view */}
                    <p className={`${isMobile && 'text-center'} mb-6 font-outfit ${isVisible ? 'fade-text' : ''}`}>
                        Master all the notes in your fretboard 
                        {/* adding break if not in mobile view */}
                        {!isMobile && <br></br>}

                        {/* adding margin on start when not in mobile view */}
                        <span className={`${!isMobile && 'ml-[22px]'}`}>
                            with this speech assistance tool!
                        </span>
                    </p>

                    {/* Speech input container */}
                    <div id="speech-input-container" 
                        className={`w-[80%] h-[80px] border border-[#262626] rounded-lg 
                        flex items-center justify-center bg-white ${isVisible ? 'fade-text' : ''}`}
                    >
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
                </aside>
                <aside className={`w-[35%] h-[60%] border border-[#A9BF9F] border-2 
                    flex flex-col items-center justify-center opacity-0
                    ${isVisible ? 'roll-right' : ''}`} 
                    id="notes-container"
                >
                    <div id="stringNum-container">
                        <p className={`text-[#262626] font-manrope ${isVisible ? 'fade-text' : ''}`}>
                            {currentNote.string}
                        </p>
                    </div>
                    <div id="note-container">
                        <p className={`text-[#262626] font-manrope ${isVisible ? 'fade-text' : ''}`}>
                            {currentNote.note}
                        </p>
                    </div>
                </aside>
            </section>

            {/* Guitar facts section */}
            <section ref={componentRef} id='facts-container' 
                className={`flex items-center justify-center w-[86%] h-[calc(30vh-80px)] mt-[20px] 
                opacity-0 ${isVisible ? 'roll-left' : ''}`}
            >
                <Faqs />
            </section>
       </section>
    );
}
// Responsive fret mastery page done.