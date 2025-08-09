const reviews = [
  {
    id: 1,
    name: "Murugesh S",
    date: "2025-05-13",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjW_U04zUQqkM4gkpuDOSHqWCXMB3Nius0Ygpi1xzjFUgDTYdCdo=w80-h80-c-rp-mo-br100",
    rating: 5,
    text: "Good place to learn in detail about the CSV and Quality management system course."
  },
  {
    id: 2,
    name: "Vimal Tamilmani",
    date: "2025-05-13",
    profileImg:
      "https://lh3.googleusercontent.com/a-/ALV-UjUmIKQOatOojcjQpjkWnuF1DF-QoUNx0WXDNsgE3fwD2NKa177IOw=w80-h80-c-rp-mo-br100",
    rating: 5,
    text: "The course provides well-organized lectures that delve into the intricacies of the CSV processes. This in-depth approach enhances comprehension and boosts confidence during interviews."
  },
  {
    id: 3,
    name: "Rathna Senthil",
    date: "2025-05-12",
    profileImg:
      "https://lh3.googleusercontent.com/a/ACg8ocJTHIyX5n7hwybApqwdyh27TWeDJJZBOKvl5YnYPgbTwO3spA=w80-h80-c-rp-mo-br100",
    rating: 5,
    text: "This platform is an excellent resource for understanding CSV. The courses are thoughtfully designed, well-structured, and explained in detail with clear and relevant examples."
  }
];

const StarRating = ({ count }) => {
  return (
    <div className="stars">
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ review }) => {
  return (
    <div className="testimonial-card">
      <div className="profile">
        <img src={review.profileImg} alt={review.name} />
        <div>
          <h4>{review.name}</h4>
          <small>{review.date}</small>
        </div>
      </div>
      <StarRating count={review.rating} />
      <p className="review-text">{review.text}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="title">Testimonials</h2>
      <div className="testimonial-list">
        {reviews.map((review) => (
          <TestimonialCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;