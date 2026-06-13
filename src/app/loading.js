import "@/styles/featured-tiles.css";
import "@/styles/tile-card.css";

const LoadingPage = () => {
  return (
    <div className="featured-section section-padding">
      <div className="page-container">
        {/* Skeleton header */}
        <div className="featured-header">
          <div className="skeleton skeleton-eyebrow" />
          <div className="skeleton skeleton-heading" />
          <div className="skeleton skeleton-subtext" />
        </div>

        {/* Skeleton grid */}
        <div className="featured-grid">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="tile-card skeleton-card">
              <div className="skeleton skeleton-image" />
              <div className="tile-card-body">
                <div className="skeleton skeleton-label" />
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-meta" />
                <div className="skeleton skeleton-footer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
