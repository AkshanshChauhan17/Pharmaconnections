import { Link } from "react-router-dom";

const navLinks = [
  { name: "HOME", url: "/" },
  { name: "ABOUT US", url: "/about" },
  { name: "COURSES", url: "/courses" },
  { name: "OUR SERVICES", url: "/services" },
  { name: "BLOGS & ARTICLES", url: "/blogs" },
  { name: "CONTACT US", url: "/contact" },
];

export default function Navigation() {
  return (
    <div className="nav">
      <div className="l bg-img"></div>
      <div className="m">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="r bg-img"></div>
    </div>
  );
}
