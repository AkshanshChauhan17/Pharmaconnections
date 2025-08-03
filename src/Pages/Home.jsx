import Counter from "../Components/Counter";
import MultiTab from "../Components/MultiTab";
import OurCourses from "../Components/OurCourses";
import SlidingHero from "../Components/SlidingHero";

export default function Home() {
    return <div className="home">
        <SlidingHero />
        <Counter />
        <MultiTab />
        <OurCourses />
    </div>
}