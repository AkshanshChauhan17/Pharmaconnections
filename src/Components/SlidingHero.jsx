const sliding_ct = [
  {
    bg: "/banner-2-bgs.jpg",
    l: "/banner-one-2.png",
    h: "PHARMA CONNECTIONS",
    st: "Bridging Academia 2 Industry",
    ct: "CPD & QAHE Accredited | An ISO 9001 Certified Company",
    p: "Welcome to Pharma Connections, (A Product of Eduteq Connections Pvt Ltd) a top global training and consulting firm based in Bangalore, India. We offer expert-designed programs in Computer System Validation (CSV), Computer Software Assurance (CSA), Clinical Research, Pharmacovigilance, and Regulatory Affairs. Renowned for our CSV training, we are committed to advancing professionals and organizations worldwide.",
  },
];

import { AiFillLeftSquare, AiFillRightSquare, AiOutlineRightCircle } from "react-icons/ai";

export default function SlidingHero() {
  return (
    <div className="sh-ar">
      {sliding_ct.map((e, i) => {
        return (
          <div className="sh bg-layer" style={{ backgroundImage: `url(${e.bg})` }}>
            <div
              className="l bg-img"
              style={{ backgroundImage: `url(${e.l})` }}
            ></div>
            <div className="r">
              <div className="h">{e.h}</div>
              <div className="st">{e.st}</div>
              <div className="ct">{e.ct}</div>
              <div className="p">{e.p}</div>
              <div className="r-btn">Read More</div>
            </div>
            <AiOutlineRightCircle className="l-a" />
          </div>
        );
      })}
    </div>
  );
}
