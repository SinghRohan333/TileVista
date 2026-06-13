import { Suspense } from "react";
import { notFound } from "next/navigation";
import TileDetailView from "@/components/tileDetailComponents/TileDetailView";
import TileDetailLoading from "./loading";
import { getTileById } from "@/libs/tilesData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const tile = await getTileById(id);
  if (!tile) return { title: "Tile Not Found — TileVista" };

  return {
    title: `${tile.title} — TileVista`,
    description: tile.description,
  };
}

const TileDetailPage = async ({ params }) => {
  const { id } = await params;
  const tile = await getTileById(id);

  if (!tile) notFound();

  return (
    <main className="tile-detail-page">
      <Suspense fallback={<TileDetailLoading />}>
        <TileDetailView tile={tile} />
      </Suspense>
    </main>
  );
};

export default TileDetailPage;
