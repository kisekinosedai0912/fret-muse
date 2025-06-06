export default function ScaleImage({ img, alt, position }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <span className="font-outfit text-[#262626]"><b>{position}</b></span>
            <img 
                src={img}
                alt={alt}
                loading="lazy"
                className="w-[450px] h-[220px] object-fit border border-[#262626] rounded-lg" 
            />
        </div>
    );
}