export default function ScaleImage({ img, alt }) {
    return (
        <img 
            src={img}
            alt={alt}
            loading="lazy"
            className="w-[450px] h-[220px] object-fit border border-[#262626] rounded-lg" 
        />
    );
}
