import "@/styles/tile-detail.css";

const TileDetailLoading = () => {
  return (
    <div className="tile-detail-wrapper">
      <div className="page-container">
        {/* Back link skeleton */}
        <div className="tile-detail-back">
          <div
            className="skeleton"
            style={{ width: "120px", height: "16px", borderRadius: "4px" }}
          />
        </div>

        <div className="tile-detail-grid">
          {/* Left — image skeleton */}
          <div className="tile-detail-image-panel">
            <div className="tile-detail-image-wrap skeleton" />
          </div>

          {/* Right — info skeleton */}
          <div className="tile-detail-info-panel">
            <div
              style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}
            >
              <div
                className="skeleton"
                style={{ width: "80px", height: "24px", borderRadius: "99px" }}
              />
              <div
                className="skeleton"
                style={{ width: "80px", height: "24px", borderRadius: "99px" }}
              />
            </div>

            <div
              className="skeleton"
              style={{
                width: "80%",
                height: "40px",
                borderRadius: "8px",
                marginBottom: "0.75rem",
              }}
            />
            <div
              className="skeleton"
              style={{
                width: "40%",
                height: "16px",
                borderRadius: "4px",
                marginBottom: "1rem",
              }}
            />
            <div
              className="skeleton"
              style={{
                width: "30%",
                height: "32px",
                borderRadius: "6px",
                marginBottom: "1.5rem",
              }}
            />

            <div className="tile-detail-divider" />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                className="skeleton"
                style={{ width: "100%", height: "14px", borderRadius: "4px" }}
              />
              <div
                className="skeleton"
                style={{ width: "95%", height: "14px", borderRadius: "4px" }}
              />
              <div
                className="skeleton"
                style={{ width: "80%", height: "14px", borderRadius: "4px" }}
              />
            </div>

            <div className="tile-detail-divider" />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                marginBottom: "1.5rem",
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    className="skeleton"
                    style={{
                      width: "30%",
                      height: "14px",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    className="skeleton"
                    style={{
                      width: "40%",
                      height: "14px",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="tile-detail-divider" />

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="skeleton"
                  style={{
                    width: "70px",
                    height: "28px",
                    borderRadius: "99px",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetailLoading;
