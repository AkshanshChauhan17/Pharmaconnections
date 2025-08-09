import { useState, useMemo } from "react";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";

const courses = [
  {
    title: "System Validation",
    slug: "/computer-system-validation/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2149595835-2.jpg",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/gear.png",
    shortDescription:
      "Learn the essentials of validating computer systems in regulated industries.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Technical",
  },
  {
    title: "Software Assurance",
    slug: "/computer-software-assurance-csa/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2149595831-1.jpg",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/program.png",
    shortDescription:
      "Master assurance practices to ensure software meets quality and compliance standards.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Technical",
  },
  {
    title: "Clinical Research",
    slug: "/clinical-research-clinical-data-management/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/6193831_3180660-1.jpg",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/data-sample-2.png",
    shortDescription:
      "Gain expertise in clinical research methods and clinical data management processes.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Healthcare",
  },
  {
    title: "Pharmacovigilance",
    slug: "/pharmacovigilance/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/08/slider-5.webp",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/pharmacy.png",
    shortDescription:
      "Learn drug safety monitoring and reporting to protect patient health.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Healthcare",
  },
  {
    title: "Regulatory Affairs",
    slug: "/regulatory-affairs/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2147650936-1.jpg",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/data.png",
    shortDescription:
      "Understand global regulations and compliance for pharmaceutical and healthcare products.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Compliance",
  },
  {
    title: "Quality Systems",
    slug: "/quality-management-system/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2149595847-1.jpg",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/quality-control.png",
    shortDescription:
      "Learn to design and implement quality systems for compliance and efficiency.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Compliance",
  },
  {
    title: "Soft Skills",
    slug: "/soft-skills-career-building/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/96074-1-1.jpg",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/group-discussion.png",
    shortDescription:
      "Develop communication and soft skills to boost career success.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Personal Development",
  },
  {
    title: "Career Consulting",
    slug: "/career-building-consulting/",
    backgroundImage:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/22827.jpg",
    icon:
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/career-path.png",
    shortDescription:
      "Get expert guidance to plan and advance your professional career.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"],
    category: "Personal Development",
  },
];

export default function CoursesMain() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.shortDescription
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="courses-section">
      <div className="courses-header">
        <h2>Our Courses</h2>
        <p>
          We work with your company to identify position requirements, implement
          recruitment programs, and initiate employee assessments that maximize
          recruitment efforts.
        </p>
      </div>

      <div className="courses-controls">
        <div className="search-box">
          <AiOutlineSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="courses-grid">
        {filteredCourses.length ? (
          filteredCourses.map((course, i) => (
            <a
              key={i}
              href={course.slug}
              className="course-card"
              style={{
                backgroundImage: `url(${course.backgroundImage})`,
              }}
            >
              <div className="overlay"></div>
              <div className="course-content">
                <img src={course.icon} alt="" className="course-icon" />
                <h3>{course.title}</h3>
                <p>{course.shortDescription}</p>
                <span className="read-more">
                  Read More <AiOutlineArrowRight />
                </span>
              </div>
            </a>
          ))
        ) : (
          <p className="no-results">No courses found.</p>
        )}
      </div>
    </div>
  );
}