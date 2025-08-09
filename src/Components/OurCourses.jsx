import { AiOutlineArrowRight } from "react-icons/ai";

const courses = [
  {
    title: "System Validation",
    slug: "/computer-system-validation/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2149595835-2.jpg",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/gear.png",
    shortDescription: "Learn the essentials of validating computer systems in regulated industries.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  },
  {
    title: "Software Assurance",
    slug: "/computer-software-assurance-csa/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2149595831-1.jpg",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/program.png",
    shortDescription: "Master assurance practices to ensure software meets quality and compliance standards.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  },
  {
    title: "Clinical Research",
    slug: "/clinical-research-clinical-data-management/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/6193831_3180660-1.jpg",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/data-sample-2.png",
    shortDescription: "Gain expertise in clinical research methods and clinical data management processes.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  },
  {
    title: "Pharmacovigilance",
    slug: "/pharmacovigilance/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/08/slider-5.webp",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/pharmacy.png",
    shortDescription: "Learn drug safety monitoring and reporting to protect patient health.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  },
  {
    title: "Regulatory Affairs",
    slug: "/regulatory-affairs/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2147650936-1.jpg",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/data.png",
    shortDescription: "Understand global regulations and compliance for pharmaceutical and healthcare products.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  },
  {
    title: "Quality Systems",
    slug: "/quality-management-system/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/2149595847-1.jpg",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/quality-control.png",
    shortDescription: "Learn to design and implement quality systems for compliance and efficiency.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  },
  {
    title: "Soft Skills",
    slug: "/soft-skills-career-building/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/96074-1-1.jpg",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/group-discussion.png",
    shortDescription: "Develop communication and soft skills to boost career success.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  },
  {
    title: "Career Consulting",
    slug: "/career-building-consulting/",
    backgroundImage: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/22827.jpg",
    icon: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img/https://pharmaconnections.in/wp-content/uploads/2024/09/career-path.png",
    shortDescription: "Get expert guidance to plan and advance your professional career.",
    highlights: ["Eligibility & Duration", "Assessment & Certification"]
  }
];

export default function OurCourses() {
    return <div className="oc">
        <div className="h">Our Courses</div>
        <div className="p">We work with your company to identify position requirements, implement recruitment programs, and<br /> initiate  employee  assessments that maximize recruitment efforts</div>
        <div className="co-ar">
          {
            courses.map((e, i)=>{
              return <div className="co">
                <div className="co-ic bg" style={{backgroundImage: `url(${e.backgroundImage})`}}></div>
                <div className="co-h">{e.title}</div>
                <div className="co-sh">{e.shortDescription}</div>
                <div className="rm">Read More <AiOutlineArrowRight className="icon" /></div>
              </div>
            })
          }
        </div>
    </div>
}