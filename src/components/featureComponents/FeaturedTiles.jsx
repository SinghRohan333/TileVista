import Link from "next/link";
import "@/styles/featured-tiles.css";
import { getFeaturedTilesData } from "@/libs/tilesData";
import TileCard from "./TileCard";

const FeaturedTiles = async () => {
  const tiles = await getFeaturedTilesData();
  //   console.log("tiles: ", tiles);
  return (
    <section className="featured-section section-padding">
      <div className="page-container">
        {/* ── Section Header ── */}
        <div className="featured-header">
          <p className="featured-eyebrow">Handpicked For You</p>
          <h2 className="section-heading">Featured Tiles</h2>
          <div className="divider" />
          <p className="featured-subtext">
            A curated selection of our finest tiles — chosen for their
            craftsmanship, beauty, and enduring style.
          </p>
        </div>

        {/* ── Tile Grid ── */}
        <div className="featured-grid">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="featured-cta-wrap">
          <Link href="/all-tiles" className="btn-outline">
            View All Tiles
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTiles;
