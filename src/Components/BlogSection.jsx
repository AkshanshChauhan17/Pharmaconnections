import { useState, useMemo } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Top 8 Skills Every CSV Professional Must Have to Scale Your Career in Pharma",
    date: "2025-08-05",
    excerpt: "Computer System Validation…",
    url: "https://pharmaconnections.in/top-8-skills-every-csv-professional-must-have-to-scale-your-career-in-pharma/",
  },
  {
    id: 2,
    title: "Key Trends to Stay Updated With Quality Management System in Pharma",
    date: "2025-08-05",
    excerpt: "The production of…",
    url: "https://pharmaconnections.in/key-trends-to-stay-updated-with-quality-management-system-in-pharma/",
  },
  {
    id: 3,
    title: "Future of CSV Jobs in India: Trends and Growth Opportunities in Pharma",
    date: "2025-07-31",
    excerpt: "India’s pharmaceutical industry…",
    url: "https://pharmaconnections.in/future-of-csv-jobs-in-india-trends-and-growth-opportunities-in-pharma/",
  },
  {
    id: 4,
    title: "What Will You Learn in a Good Clinical Research Course?",
    date: "2025-07-26",
    excerpt: "Clinical research is…",
    url: "https://pharmaconnections.in/what-will-you-learn-in-a-good-clinical-research-course/",
  },
  {
    id: 5,
    title: "AI and ML Integration in Clinical Research and Clinical Data Management",
    date: "2025-07-24",
    excerpt: "The worldwide pharma…",
    url: "https://pharmaconnections.in/ai-and-ml-integration-in-clinical-research-and-clinical-data-management/",
  },
  {
    id: 6,
    title: "Career Building and Consulting: Pharma Connections Is Your Go-to Choice",
    date: "2025-07-23",
    excerpt: "The pharmaceutical industry…",
    url: "https://pharmaconnections.in/career-building-and-consulting-pharma-connections-is-your-go-to-choice/",
  },
  {
    id: 7,
    title: "Role of GAMP 5 and 21 CFR Part 11 in Computer System Validation",
    date: "2025-07-23",
    excerpt: "Companies that deal…",
    url: "https://pharmaconnections.in/role-of-gamp-5-and-21-cfr-part-11-in-computer-system-validation/",
  },
  {
    id: 8,
    title: "AI and ML in Quality Management Courses: Future of Pharma Compliance",
    date: "2025-07-11",
    excerpt: "The pharmaceutical industry…",
    url: "https://pharmaconnections.in/ai-and-ml-in-quality-management-courses-future-of-pharma-compliance/",
  },
];

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesDate = filterDate
        ? post.date === filterDate
        : true;

      return matchesSearch && matchesDate;
    });
  }, [searchTerm, filterDate]);

  const uniqueDates = Array.from(
    new Set(blogPosts.map((post) => post.date))
  ).sort((a, b) => (a < b ? 1 : -1)); // descending order

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search blog posts by title"
          />

          <select
            className="date-filter"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            aria-label="Filter blog posts by date"
          >
            <option value="">Filter by Date</option>
            {uniqueDates.map((date) => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </option>
            ))}
          </select>

          {filterDate && (
            <button
              className="clear-filter"
              onClick={() => setFilterDate("")}
              aria-label="Clear date filter"
            >
              Clear Filter
            </button>
          )}
        </div>

        <div className="blog-grid">
          {filteredPosts.length === 0 ? (
            <p className="no-results">No blog posts found.</p>
          ) : (
            filteredPosts.map(({ id, title, date, excerpt, url }) => (
              <article key={id} className="blog-card">
                <ul className="meta-info">
                  <li>
                    <span className="icon-clock" aria-hidden="true">🕒</span>{" "}
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </li>
                  <li>
                    <a href={`${url}#respond`} className="comments-link" tabIndex={-1}>
                      Comments are Closed
                    </a>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                </h3>
                <p className="excerpt">{excerpt}</p>
                <a href={url} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read More <span aria-hidden="true">→</span>
                </a>
              </article>
            ))
          )}
        </div>

        <div className="pagination">
          <ul>
            <li><button disabled className="page current" aria-current="page">1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><span className="dots">…</span></li>
            <li><button>32</button></li>
            <li><button aria-label="Next page">›</button></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;