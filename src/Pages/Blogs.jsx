import BlogSection from "../Components/BlogSection";
import MiniHeader from "../Components/MiniHeader";

export default function Blogs() {
    return <div className="blog">
        <MiniHeader text={"Blogs & Articles"} />
        <BlogSection />
    </div>
}