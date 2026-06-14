export const getAllTilesData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tiles`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch featured tiles");
  }
  const data = await res.json();
  return data;
};

export const getFeaturedTilesData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tiles?featured=true`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch featured tiles");
  }
  const data = await res.json();
  return data;
};

export const getTileById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tiles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data;
};
