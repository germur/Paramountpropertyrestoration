export default function BlogCard({ title, description, author, date, slug, tags, image, featured = false }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const imageUrl = image ? (image.startsWith('/') ? image : `/${image}`) : null;

  return (
    <article className={`blog-card ${featured ? 'featured' : ''}`}>
      {imageUrl && (
        <div className="blog-card-image">
          <a href={`/blog/${slug}`}>
            <img src={imageUrl} alt={title} loading="lazy" />
          </a>
          {featured && (
            <div className="featured-badge">
              <span>Featured</span>
            </div>
          )}
        </div>
      )}

      <div className="blog-card-content">
        <div className="blog-card-tags">
          {tags?.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h3 className="blog-card-title">
          <a href={`/blog/${slug}`}>{title}</a>
        </h3>

        <p className="blog-card-description">{description}</p>

        <div className="blog-card-footer">
          <div className="blog-card-meta">
            <span className="blog-card-author">By {author}</span>
            <time className="blog-card-date" dateTime={new Date(date).toISOString()}>
              {formattedDate}
            </time>
          </div>

          <a href={`/blog/${slug}`} className="read-more">
            Read More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}