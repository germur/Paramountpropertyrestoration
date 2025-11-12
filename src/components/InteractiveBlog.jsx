import { useState, useMemo } from "react";
import BlogCard from "./BlogCard.jsx";

const POSTS_PER_PAGE = 9;

export default function InteractiveBlog({ allPosts, allTags, recentPosts }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTag, setActiveTag] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [viewMode, setViewMode] = useState("grid"); // grid or list

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleTagClick = (tag) => {
        setActiveTag(currentTag => (currentTag === tag ? null : tag));
        setCurrentPage(1);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setActiveTag(null);
        setCurrentPage(1);
    };

    const filteredPosts = useMemo(() => {
        const term = searchTerm.toLowerCase().trim();
        const tag = activeTag?.toLowerCase().trim();

        return allPosts.filter((post) => {
            const postData = post.data;
            const postTags = postData.tags?.map(t => t.toLowerCase()) || [];
            const matchesSearch = !term ||
                postData.title.toLowerCase().includes(term) ||
                postData.description.toLowerCase().includes(term) ||
                postData.author.toLowerCase().includes(term);
            const matchesTag = !tag || postTags.includes(tag);
            return matchesSearch && matchesTag;
        });
    }, [searchTerm, activeTag, allPosts]);

    const featuredPosts = filteredPosts.filter(post => post.data.featured);
    const regularPosts = filteredPosts.filter(post => !post.data.featured);
    const isFiltering = searchTerm || activeTag;

    const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
    const paginatedRegularPosts = regularPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getPageNumbers = () => {
        const pages = [];
        const showEllipsis = totalPages > 7;

        if (!showEllipsis) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="modern-blog-container">
            {/* Search and Filter Bar */}
            <div className="blog-controls">
                <div className="search-filter-section">
                    <div className="search-wrapper">
                        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <input
                            type="text"
                            placeholder="Search articles, topics, or authors..."
                            className="modern-search-input"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {searchTerm && (
                            <button className="clear-search-icon" onClick={() => setSearchTerm("")}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="view-toggle">
                        <button
                            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                            title="Grid view"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </button>
                        <button
                            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                            onClick={() => setViewMode('list')}
                            title="List view"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Tags Filter */}
                <div className="tags-filter-section">
                    <span className="filter-label">Filter by topic:</span>
                    <div className="tags-scroll">
                        <button
                            className={`filter-tag ${!activeTag ? 'active' : ''}`}
                            onClick={clearFilters}
                        >
                            All Articles
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                className={`filter-tag ${activeTag === tag ? 'active' : ''}`}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Info */}
                {isFiltering && (
                    <div className="results-info">
                        <span className="results-count">
                            {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
                        </span>
                        <button onClick={clearFilters} className="clear-filters-btn">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
                <div className="no-results-modern">
                    <svg className="no-results-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <h3>No articles found</h3>
                    <p>We couldn't find any articles matching your search. Try different keywords or browse all articles.</p>
                    <button onClick={clearFilters} className="reset-btn">
                        Show all articles
                    </button>
                </div>
            )}

            {/* Featured Posts */}
            {featuredPosts.length > 0 && !isFiltering && (
                <section className="featured-showcase">
                    <div className="section-header">
                        <h2 className="section-title-modern">Featured Articles</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="featured-grid-modern">
                        {featuredPosts.map((post) => (
                            <BlogCard key={post.id} {...post.data} slug={post.slug} featured={true} />
                        ))}
                    </div>
                </section>
            )}

            {/* Regular Posts */}
            {paginatedRegularPosts.length > 0 && (
                <section className="all-posts-section">
                    <div className="section-header">
                        <h2 className="section-title-modern">
                            {isFiltering ? 'Search Results' : 'Latest Articles'}
                        </h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className={`posts-grid-modern ${viewMode}`}>
                        {paginatedRegularPosts.map((post) => (
                            <BlogCard key={post.id} {...post.data} slug={post.slug} viewMode={viewMode} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="pagination-modern">
                            <button
                                className="pagination-btn prev"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                Previous
                            </button>

                            <div className="pagination-numbers">
                                {getPageNumbers().map((page, index) => (
                                    page === '...' ? (
                                        <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
                                    ) : (
                                        <button
                                            key={page}
                                            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </button>
                                    )
                                ))}
                            </div>

                            <button
                                className="pagination-btn next"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    )}
                </section>
            )}

            {/* Sidebar - Recent Posts */}
            {!isFiltering && recentPosts.length > 0 && (
                <aside className="blog-sidebar-modern">
                    <div className="sidebar-card">
                        <h3 className="sidebar-title">Recent Articles</h3>
                        <div className="recent-posts-list">
                            {recentPosts.slice(0, 5).map((post) => (
                                <a href={`/blog/${post.slug}`} className="recent-post-item" key={post.id}>
                                    {post.data.image && (
                                        <div className="recent-post-thumb">
                                            <img src={post.data.image} alt={post.data.title} loading="lazy" />
                                        </div>
                                    )}
                                    <div className="recent-post-content">
                                        <h4>{post.data.title}</h4>
                                        <time>{new Date(post.data.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })}</time>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            )}
        </div>
    );
}
