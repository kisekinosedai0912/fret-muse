import HomeLeftComponent from './components/LeftContainer';
import HomeRightComponent from './components/RightContainer';
import FretPage from './components/FretPage';

export default function Main() {
    return (
        <main>
            {/* Home page */}
            <section className="flex gap-4 p-4 h-screen bg-[#F5F5F5] snap-start" id="home-wrapper">
                <HomeLeftComponent />
                <HomeRightComponent />
            </section>
            
            {/* Fret master page */}
            <section className="flex gap-4 p-4 h-screen snap-start" id="fret-wrapper">
                <FretPage />
            </section>
        </main>
    );
}