import Scroller from './Scroll';

export default function LeftContainer() {
    return (
        <>  
            {/* Left container of the home page - text container */}
            <section className="flex-1 flex flex-col gap-4 max-h-[calc(100vh-96px)] relative mt-[80px]">
                <div id="box-1" className="absolute h-1/3 min-h-[200px] ml-[36%] mr-[-10%] mt-[10%] border border-[#262626] rounded-lg z-[1] w-[70%]"></div>
                <div id="box-2" className="absolute h-1/3 min-h-[200px] ml-[12%] border-2 border-[#A9BF9F] mt-[25%] rounded-lg z-[2] w-[85%] flex flex-col items-center justify-center">
                    <div className="max-w-[80%] text-center">
                        <p className="font-outfit text-[#1A1A1A]">Your one and only free website to <b className="text-[#012E40]">Master</b> your <b className="text-[#012E40]">Guitar,</b></p>
                        <p className="font-outfit text-[#1A1A1A]">Take your guitar skills to the <b className="text-[#D90404]">Next Level!</b></p>
                    </div>
                </div>
                <div id="box-3" className="absolute h-1/3 min-h-[200px] ml-[30%] w-[40%] mt-[45%] border border-[#262626] rounded-lg z-[3]"></div>

                <Scroller />
            </section>
        </>
    );
}