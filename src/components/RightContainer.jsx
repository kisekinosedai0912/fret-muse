import '../assets/css/main.css';
import jazzmaster from '../assets/img/jazzmaster(no-bg).png';
import lespaul from '../assets/img/lespaul(no-bg).png';
import hss from '../assets/img/HSS(no-bg).png';
import superstrat from '../assets/img/superstrat.png';
import sg from '../assets/img/sg(no-bg).png';

export default function RightContainer() {
    return (
        <>
            {/* Right container - image container */}
             <section className="flex-1 flex-col z-[4] relative mt-[40px]">
                <div className="h-full max-h-[calc(100vh-82px)] flex items-start justify-center">
                    <div className="transform rotate-[54deg] mt-[-17%] transition-transform duration-300 flex flex-col items-center">
                        <img 
                            src={jazzmaster} 
                            alt="jazz master guitar" 
                            loading='lazy'
                            className="w-[700px] h-auto object-contain mix-blend-multiply"
                        />
                    </div>
                    <span 
                        id="guitarName" 
                        className="absolute right-[320px] top-[410px] font-outfit text-xl px-[10px] bg-[#736C12] text-white clip-path-polygon"
                        style={{
                            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 25%)'
                        }}
                    >
                        Jazz Master
                    </span>
                </div>

                {/* pyramid containers */}
                <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex items-end gap-4 justify-center" id="pyramid-container">
                    <div className="flex items-center justify-center w-[120px] h-[120px] border-2 border-[#A9BF9F] bg-transparent rounded-lg hover:bg-[#A9BF9F] hover:h-[140px] transition-all duration-300 cursor-pointer">
                        <img 
                            src={lespaul} 
                            alt="les paul guitar" 
                            loading='lazy'
                            className="w-[80px] h-auto object-contain mix-blend-multiply z-7"
                        />
                    </div>
                    <div className="w-[120px] h-[140px] border-2 border-[#A9BF9F] bg-[#748E67] rounded-lg transition-all duration-300 cursor-pointer">
                        <img 
                            src={jazzmaster} 
                            alt="jazz master guitar" 
                            loading='lazy'
                            className="w-[120px] h-auto object-contain mix-blend-multiply z-7"
                        />
                    </div>
                    <div className="flex items-center justify-center w-[120px] h-[120px] border-2 border-[#A9BF9F] bg-transparent rounded-lg hover:bg-[#A9BF9F] hover:h-[140px] transition-all duration-300 cursor-pointer">
                        <img 
                            src={hss} 
                            alt="HSS Stratocaster guitar" 
                            loading='lazy'
                            className="w-[110px] h-auto object-contain mix-blend-multiply z-7"
                        />
                    </div>
                    <div className="flex items-center justify-center w-[120px] h-[120px] border-2 border-[#A9BF9F] bg-transparent rounded-lg hover:bg-[#A9BF9F] hover:h-[140px] transition-all duration-300 cursor-pointer">
                        <img 
                            src={superstrat} 
                            alt="Super Stratocaster Ibanez guitar" 
                            loading='lazy'
                            className="w-[120px] h-auto object-contain mix-blend-multiply z-7 transform rotate-[-90deg]"
                        />
                    </div>
                    <div className="flex items-center justify-center w-[120px] h-[120px] border-2 border-[#A9BF9F] bg-transparent rounded-lg hover:bg-[#A9BF9F] hover:h-[140px] transition-all duration-300 cursor-pointer">
                        <img 
                            src={sg} 
                            alt="Gibson SG guitar" 
                            loading='lazy'
                            className="w-[110px] h-auto object-contain mix-blend-multiply z-7 transform rotate-[-90deg]"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}