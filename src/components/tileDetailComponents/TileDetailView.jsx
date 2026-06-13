import Image from "next/image";
import Link from "next/link";
import "@/styles/tile-detail.css";

const TileDetailView = ({ tile }) => {
  return (
    <div className="tile-detail-wrapper">
      <div className="page-container">
        {/* ── Back navigation ── */}
        <div className="tile-detail-back">
          <Link href="/all-tiles" className="tile-detail-back-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Gallery
          </Link>
        </div>

        {/* ── Two column layout ── */}
        <div className="tile-detail-grid">
          {/* ── LEFT: Image Panel ── */}
          <div className="tile-detail-image-panel">
            <div className="tile-detail-image-wrap">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* ── RIGHT: Info Panel ── */}
          <div className="tile-detail-info-panel">
            {/* Category eyebrow + stock badge */}
            <div className="tile-detail-top-row">
              <span className="tile-detail-category">{tile.category}</span>
              <span
                className={tile.inStock ? "badge-instock" : "badge-outofstock"}
              >
                {tile.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Title */}
            <h1 className="tile-detail-title">{tile.title}</h1>

            {/* Creator */}
            <p className="tile-detail-creator">
              <span className="tile-detail-label">By</span> {tile.creator}
            </p>

            {/* Price */}
            <div className="tile-detail-price-row">
              <span className="tile-detail-price">
                ${tile.price.toFixed(2)}
              </span>
              <span className="tile-detail-currency">{tile.currency}</span>
            </div>

            {/* Divider */}
            <div className="tile-detail-divider" />

            {/* Description */}
            <p className="tile-detail-description">{tile.description}</p>

            {/* Divider */}
            <div className="tile-detail-divider" />

            {/* Specifications */}
            <div className="tile-detail-specs">
              <h3 className="tile-detail-section-label">Specifications</h3>
              <div className="tile-detail-spec-grid">
                <div className="tile-detail-spec-row">
                  <span className="tile-detail-spec-key">Dimensions</span>
                  <span className="tile-detail-spec-val">
                    {tile.dimensions}
                  </span>
                </div>
                <div className="tile-detail-spec-row">
                  <span className="tile-detail-spec-key">Material</span>
                  <span className="tile-detail-spec-val">{tile.material}</span>
                </div>
                <div className="tile-detail-spec-row">
                  <span className="tile-detail-spec-key">Category</span>
                  <span className="tile-detail-spec-val">
                    {tile.category.charAt(0).toUpperCase() +
                      tile.category.slice(1)}
                  </span>
                </div>
                <div className="tile-detail-spec-row">
                  <span className="tile-detail-spec-key">Availability</span>
                  <span className="tile-detail-spec-val">
                    {tile.inStock ? "Available" : "Currently unavailable"}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="tile-detail-divider" />

            {/* Tags */}
            <div className="tile-detail-tags">
              <h3 className="tile-detail-section-label">Tags</h3>
              <div className="tile-detail-tags-wrap">
                {tile.tags.map((tag) => (
                  <span key={tag} className="tile-detail-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetailView;
