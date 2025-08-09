import Counter from "../Components/Counter";
import ImageScroller from "../Components/ImageScroller";
import MultiTab from "../Components/MultiTab";
import OurCourses from "../Components/OurCourses";
import Services from "../Components/OurServices";
import SlidingHero from "../Components/SlidingHero";
import Testimonials from "../Components/Testamonial";

export default function Home() {
    return <div className="home">
        <SlidingHero />
        <Counter />
        <MultiTab />
        <OurCourses />
        <ImageScroller />
        <Services />
        <Testimonials />
    </div>
}