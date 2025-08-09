import { useState } from "react";
import { FaChalkboardTeacher, FaUserTie, FaClipboardCheck } from 'react-icons/fa';

const tabsData = [
  {
    id: "training",
    title: "Training",
    icon: <FaChalkboardTeacher size={24} color="#2c3e50" />,
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: <FaUserTie size={24} color="#2c3e50" />,
  },
  {
    id: "auditing",
    title: "Auditing",
    icon: <FaClipboardCheck size={24} color="#2c3e50" />,
  },
];

const tabContents = {
  training: {
    heading: "Comprehensive Professional Training",
    description:
      "Our expert-led training sessions are designed to equip your team with the latest industry skills and best practices. From foundational knowledge to advanced techniques, we tailor programs that drive measurable performance improvements.",
    points: [
      "Customized learning modules for all levels",
      "Interactive workshops and hands-on exercises",
      "Ongoing support and progress tracking",
    ],
  },
  consulting: {
    heading: "Strategic Business Consulting",
    description:
      "Leverage our consulting services to identify growth opportunities, streamline operations, and implement effective solutions that align with your organizational goals. Our consultants bring industry expertise and actionable insights.",
    points: [
      "In-depth market analysis and feasibility studies",
      "Process optimization and efficiency audits",
      "Change management and transformation planning",
    ],
  },
  auditing: {
    heading: "Thorough Compliance Auditing",
    description:
      "Ensure your business adheres to industry standards and regulatory requirements with our comprehensive auditing services. We deliver detailed reports and recommendations to help mitigate risks and enhance transparency.",
    points: [
      "Risk assessment and internal controls evaluation",
      "Regulatory compliance verification",
      "Detailed audit reporting with actionable insights",
    ],
  },
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("training");
  const { heading, description, points } = tabContents[activeTab];

  return (
    <div className="tabs-container">
      <ul className="tabs-nav">
        {tabsData.map((tab) => (
          <li
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-title">{tab.title}</span>
          </li>
        ))}
      </ul>

      <div className="tabs-content">
        <h2 className="tab-heading">{heading}</h2>
        <p className="tab-description">{description}</p>
        <ul className="tab-points">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;