import Image from "next/image";
import Link from "next/link";
import "@/styles/tile-card.css";

const TileCard = ({ tile, compact = false }) => {
  return (
    <article className="tile-card">
      {/* ── Image ── */}
      <div className="tile-image-wrap">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
        />
        {/* Stock badge — only in full mode */}
        {!compact && (
          <span className={tile.inStock ? "badge-instock" : "badge-outofstock"}>
            {tile.inStock ? "In Stock" : "Out of Stock"}
          </span>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="tile-card-body">
        {compact ? (
          // ── Compact mode — title + button only ──
          <>
            <h3 className="tile-card-title">{tile.title}</h3>
            <div className="tile-card-footer tile-card-footer--compact">
              <Link
                href={`/tile/${tile.id}`}
                className="tile-card-btn tile-card-btn--full"
                aria-label={`View details for ${tile.title}`}
              >
                Details
              </Link>
            </div>
          </>
        ) : (
          // ── Full mode — all info ──
          <>
            <span className="tile-card-category">{tile.category}</span>
            <h3 className="tile-card-title">{tile.title}</h3>
            <div className="tile-card-meta">
              <span>{tile.dimensions}</span>
              <span className="tile-card-meta-dot" aria-hidden="true">
                ·
              </span>
              <span>{tile.material}</span>
            </div>
            <div className="tile-card-footer">
              <span className="tile-card-price">
                ${tile.price.toFixed(2)}
                <span className="tile-card-currency"> {tile.currency}</span>
              </span>
              <Link
                href={`/tile/${tile.id}`}
                className="tile-card-btn"
                aria-label={`View details for ${tile.title}`}
              >
                View Details
              </Link>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default TileCard;
