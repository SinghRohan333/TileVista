import { Suspense } from "react";
import AllTilesClient from "@/components/allTilesComponents/AllTilesClient";
import AllTilesLoading from "./loading";
import "@/styles/all-tiles.css";
import { getAllTilesData } from "@/libs/tilesData";

export const metadata = {
  title: "All Tiles — TileVista",
  description: "Browse our full collection of premium tiles.",
};

export default async function AllTilesPage() {
  const tiles = await getAllTilesData();

  return (
    <main className="all-tiles-page">
      {/* ── Page Header ── */}
      <div className="all-tiles-header">
        <div className="page-container all-tiles-header-inner">
          <p className="all-tiles-eyebrow">The Collection</p>
          <h1 className="all-tiles-heading">All Tiles</h1>
          <div className="divider" style={{ margin: "0.5rem auto 0" }} />
          <p className="all-tiles-subtext">
            Explore our full range of handpicked tiles — from classic ceramics
            to luxury marble, stone, and beyond.
          </p>
        </div>
      </div>

      {/* ── Client Section (search + grid) ── */}
      <div className="page-container">
        <Suspense fallback={<AllTilesLoading />}>
          <AllTilesClient tiles={tiles} />
        </Suspense>
      </div>
    </main>
  );
}
