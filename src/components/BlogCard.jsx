export default function BlogCard({ title, description, author, date, slug, tags, image, featured = false, viewMode = 'grid' }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const imageUrl = image ? (image.startsWith('/') ? image : `/${image}`) : '/images/blog/heroBlog.webp';

  return (
    <article className={`blog-card-modern ${featured ? 'featured' : ''} ${viewMode}`}>
      <a href={`/blog/${slug}`} className="card-link-wrapper">
        <div className="blog-card-image-modern">
          <img src={imageUrl} alt={title} loading="lazy" />
          {featured && (
            <div className="featured-badge-modern">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Featured
            </div>
          )}
          <div className="card-overlay"></div>
        </div>

        <div className="blog-card-content-modern">
          <div className="blog-card-tags-modern">
            {tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="tag-modern">{tag}</span>
            ))}
          </div>

          <h3 className="blog-card-title-modern">{title}</h3>

          <p className="blog-card-description-modern">{description}</p>

          <div className="blog-card-footer-modern">
            <div className="blog-card-meta-modern">
              <div className="author-info">
                <div className="author-avatar">
                  {author.charAt(0).toUpperCase()}
                </div>
                <div className="author-details">
                  <span className="author-name">{author}</span>
                  <time className="post-date" dateTime={new Date(date).toISOString()}>
                    {formattedDate}
                  </time>
                </div>
              </div>
            </div>

            <div className="read-more-modern">
              <span>Read Article</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}