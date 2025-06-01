import HomeLeftComponent from './components/LeftContainer';
import HomeRightComponent from './components/RightContainer';

export default function Main() {
    return (
        <main className="flex gap-4 p-4 h-[calc(100vh-80px)] bg-[#F5F5F5]">
            <HomeLeftComponent />
            <HomeRightComponent />
        </main>
    );
}