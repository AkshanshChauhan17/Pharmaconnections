import { useState } from "react";

const faqData = [
  {
    question: "1. What is Pharma Connections?",
    answer:
      "Pharma Connections is a leading ed-tech platform that provides industry crafted course in pharmaceutical, lifescience and technical aspect of pharma industry. Our courses are designed and tailored with an objective to provide upskilling and knowledge based learning for professionals in the pharmaceutical and lifescience industry. Our courses cover a wide range of topics including real-time scenarios and our trainers are highly competent and expertise in their respective area of knowledge.",
  },
  {
    question: "2. How do I enroll in a digital course offered by Pharma Connections?",
    answer:
      "Enrolling for courses at Pharma Connections is one of the easiest process. All you need to do is, Simply visit our website, browse through the available listed courses, and click on “Enroll Now” button, fill basic details and course of your choice. Follow the prompts to complete the registration process.",
  },
  {
    question: "3. What types of courses does Pharma Connections offer?",
    answer: (
      <>
        <strong>OUR COURSE LIBRARY:-</strong>
        <ul>
          <li>Computer System Validation</li>
          <li>Clinical Trials & Research</li>
          <li>Quality Assurance</li>
          <li>Quality Management System</li>
          <li>Pharmaceutical Microbiology</li>
          <li>Soft Skills & Career Building</li>
        </ul>
      </>
    ),
  },
  {
    question: "4. Are the courses self-paced, or do they have a fixed schedule?",
    answer:
      "Our courses are designed to be flexible, every session is going to be live session allowing you to learn at your own pace. You can access course materials at any time, from anywhere, making it convenient for working professionals to balance their learning with their busy schedules.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <div className="header-divider" />
        </div>

        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div className="faq-card" key={index}>
              <button
                className={`faq-question ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleIndex(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? "show" : ""}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;