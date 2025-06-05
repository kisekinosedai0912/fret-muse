

export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-[15dvh] bg-[#262626] text-white font-outfit-small">
            <p className="text-center">
                &copy; {new Date().getFullYear()} Guitar Fretboard Mastery. All rights reserved.
            </p>
        </footer>
    );
}