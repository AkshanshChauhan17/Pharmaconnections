const images = [
  {
    url: "https://pharmaconnections.in/wp-content/uploads/2024/10/Untitled-design-3.png",
  },
  {
    url: "https://pharmaconnections.in/wp-content/uploads/2024/11/Untitled-design-5.jpg",
  },
  {
    url: "https://pharmaconnections.in/wp-content/uploads/2025/04/da06aa3642df7f8ab24a5093ba99c622486938817dc911c0f8151571f3539e5f.png",
  },
  {
    url: "https://pharmaconnections.in/wp-content/uploads/2025/04/Untitled-design-85.png",
  },
  {
    url: "https://pharmaconnections.in/wp-content/uploads/2024/10/Untitled-design-6.png",
  },
  {
    url: "https://pharmaconnections.in/wp-content/uploads/2024/10/Untitled-design-5.png",
  },
  {
    url: "https://pharmaconnections.in/wp-content/uploads/2024/10/Untitled-design-4.png",
  },
];

const ImageScroller = () => {
  const duplicated = [...images, ...images, ...images, ...images, ...images];

  return (
    <div className="scroller-container">
      <div className="scroller-track">
        {duplicated.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={`img-${index}`}
            className="scroller-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
