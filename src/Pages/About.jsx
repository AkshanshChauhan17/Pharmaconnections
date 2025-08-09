import AboutFirstSection from "../Components/AboutFirstSection";
import BusinessObjectives from "../Components/BusinessObjective";
import FounderNote from "../Components/FounderNote";
import MiniHeader from "../Components/MiniHeader";
import Story from "../Components/Story";

export default function About() {
    return <div className="about">
        <MiniHeader text={"About"} />
        <AboutFirstSection />
        <BusinessObjectives />
        <FounderNote />
        <Story />
    </div>
}