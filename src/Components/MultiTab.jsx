import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";

const tabs = [
  {
    name: "Idea Generation",
    content: {
      backgroundImage: "/tab-bg1.jpg",
      description: "Idea generation is central to our training programs, focusing on harnessing creative thinking and brainstorming techniques to develop innovative solutions. Participants engage in structured activities such as mind mapping and lateral thinking, designed to enhance their problem-solving abilities. By exploring diverse perspectives and encouraging free-flowing ideas, our training empowers individuals to unlock unique approaches and achieve effective, impactful outcomes in their professional and personal endeavors."
    }
  },
  {
    name: "Driven by Curiosity",
    content: {
      backgroundImage: "/tab-bg2.jpg",
      description: "Driven by curiosity, our training programs ignite a passion for exploration and discovery. We encourage participants to delve deeply into topics, ask insightful questions, and challenge conventional thinking. By fostering an environment of inquisitiveness and continuous learning, we help individuals unlock their full potential, embrace innovative ideas, and drive personal and professional growth. Let curiosity led the way to transformative learning experiences and groundbreaking solutions."
    }
  },
  {
    name: "Intellectually Diverse",
    content: {
      backgroundImage: "/tab-bg3.jpg",
      description: "Our training programs embrace intellectual diversity, celebrating a range of perspectives and expertise. By bringing together varied backgrounds and viewpoints, we create a rich learning environment that fosters innovative thinking and problem-solving. Participants benefit from diverse insights, collaborative learning, and a broader understanding of complex issues. This inclusive approach not only enhances individual growth but also drives collective success and creativity in tackling challenges and achieving goals."
    }
  },
  {
    name: "Teaching Methods",
    content: {
      backgroundImage: "/tab-bg4.jpg",
      description: "Our training programs utilize dynamic teaching methods tailored to enhance learning and engagement. We incorporate interactive workshops, hands-on exercises, and real-world case studies to ensure practical application of knowledge. Through diverse techniques such as collaborative projects, multimedia resources, and personalized feedback, we cater to various learning styles and needs, fostering deeper understanding and skill development. Our methods are designed to empower participants and drive effective, lasting learning outcomes."
    }
  },
  {
    name: "Globally Focused",
    content: {
      backgroundImage: "/tab-bg3.jpg",
      description: "Our training programs are globally focused, designed to address international perspectives and cross-cultural challenges. We integrate global best practices, diverse viewpoints, and international case studies to broaden participants' understanding of global dynamics. By emphasizing worldwide trends and cross-border collaboration, we prepare individuals to navigate and excel in a globalized environment, fostering a comprehensive approach to problem-solving and strategic thinking in a diverse, interconnected world."
    }
  }
];

export default function MultiTab() {
    const [selected, setSelected] = useState(0);
    return <div className="mt bg-layer" style={{backgroundImage: `url(${tabs[selected].content.backgroundImage})`}}>
        <div className="l">
            {
                tabs.map((e, i)=>{
                    return <div className="tab" onClick={()=>setSelected(i)} style={{fontWeight: selected === i && 600}}>{e.name}</div>
                })
            }
            <div className="bottom-contact">
                <AiFillPhone className="phone" />
                Contact Us
            </div>
        </div>
        <div className="r">
            <div className="t">{tabs[selected].content.description}</div>
        </div>
        <div className="layer"></div>
    </div>
}