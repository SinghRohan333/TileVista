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
    </article>
  );
};

export default TileCard;
