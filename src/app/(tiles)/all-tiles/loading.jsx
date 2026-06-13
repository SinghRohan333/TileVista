import "@/styles/all-tiles.css";
import "@/styles/tile-card.css";

export default function AllTilesLoading() {
  return (
    <div className="all-tiles-body">
      {/* ── Search bar skeleton ── */}
      <div className="search-bar-wrap">
        <div
          className="skeleton"
          style={{
            height: "52px",
            width: "100%",
            maxWidth: "560px",
            margin: "0 auto",
            borderRadius: "var(--tv-radius-md)",
          }}
        />
      </div>

      {/* ── Results count skeleton ── */}
      <div
        className="skeleton"
        style={{
          height: "14px",
          width: "160px",
          marginBottom: "1.5rem",
          borderRadius: "var(--tv-radius-sm)",
        }}
      />

      {/* ── Grid skeleton — 8 cards ── */}
      <div className="tiles-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="tile-card skeleton-card">
            <div className="skeleton skeleton-image" />
            <div className="tile-card-body">
              <div className="skeleton skeleton-title" />
              <div
                className="skeleton skeleton-footer"
                style={{ marginTop: "0.6rem" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
