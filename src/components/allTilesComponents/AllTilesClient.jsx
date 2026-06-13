"use client";

import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import TilesGrid from "./TilesGrid";

const AllTilesClient = ({ tiles }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTiles = useMemo(() => {
    if (!searchQuery.trim()) return tiles;
    return tiles.filter((tile) =>
      tile.title.toLowerCase().includes(searchQuery.toLowerCase().trim()),
    );
  }, [searchQuery, tiles]);

  return (
    <div className="all-tiles-body">
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <TilesGrid tiles={filteredTiles} totalCount={tiles.length} />
    </div>
  );
};

export default AllTilesClient;
