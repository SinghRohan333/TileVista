import FeaturedTiles from "@/components/featureComponents/FeaturedTiles";
import Banner from "@/components/sharedComponents/Banner";
import MarqueeBanner from "@/components/sharedComponents/MarqueeBanner";
import { Suspense } from "react";
import LoadingPage from "./loading";

export default function Home() {
  return (
    <>
      <Banner />
      <MarqueeBanner />
      <Suspense fallback={<LoadingPage />}>
        <FeaturedTiles />
      </Suspense>
    </>
  );
}
