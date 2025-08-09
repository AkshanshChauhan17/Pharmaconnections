import CoursesMain from "../Components/CoursesMain";
import MiniHeader from "../Components/MiniHeader";
import OurCourses from "../Components/OurCourses";

export default function Courses() {
    return <div className="courses">
        <MiniHeader text={"Courses"} />
        <CoursesMain />
    </div>
}