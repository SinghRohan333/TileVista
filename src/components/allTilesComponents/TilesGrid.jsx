import TileCard from "../featureComponents/TileCard";

const TilesGrid = ({ tiles, totalCount }) => {
  return (
    <div className="tiles-grid-section">
      {/* ── Results count ── */}
      <p className="tiles-results-count">
        {tiles.length === totalCount
          ? `Showing all ${totalCount} tiles`
          : `Showing ${tiles.length} of ${totalCount} tiles`}
      </p>

      {/* ── Empty state ── */}
      {tiles.length === 0 ? (
        <div className="tiles-empty-state">
          <span className="tiles-empty-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </span>
          <h3 className="tiles-empty-heading">No tiles found</h3>
          <p className="tiles-empty-subtext">
            Try searching with a different name or browse all tiles below.
          </p>
        </div>
      ) : (
        // ── Grid ──
        <div className="tiles-grid">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} compact={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TilesGrid;
