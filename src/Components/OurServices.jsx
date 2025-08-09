import { FaDollarSign, FaCapsules, FaClipboardCheck } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Training",
    description: "Unlock the potential of your workforce with our comprehensive training...",
    icon: FaDollarSign,
    link: "https://pharmaconnections.in/courses/"
  },
  {
    id: 2,
    title: "Consulting",
    description: "Embark on a journey of regulatory excellence with our bespoke consulting services,...",
    icon: FaCapsules,
    link: "/ourservices/"
  },
  {
    id: 3,
    title: "Auditing",
    description: "Guarantee the resilience and effectiveness of your operational frameworks and...",
    icon: FaClipboardCheck,
    link: "/ourservices/"
  }
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="heading">Our Services</h2>
      <div className="service-list">
        {services.map(({ id, title, description, icon: Icon, link }) => (
          <div key={id} className="service-card">
            <Icon className="service-icon" />
            <div className="number">0{id}</div>
            <div className="content">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} className="read-more">Read more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;