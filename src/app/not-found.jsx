import Link from "next/link";
import { House, Magnifier } from "@gravity-ui/icons";
import "@/styles/not-found.css";

const NotFoundPage = () => {
  return (
    <main className="notfound-page">
      <div className="page-container notfound-container">
        <div className="notfound-content">
          <span className="notfound-code">404</span>

          <div className="divider notfound-divider" />

          <h1 className="notfound-title">Tile Not Found</h1>
          <p className="notfound-subtitle">
            The page you&apos;re looking for seems to have been removed,
            renamed, or never existed. Let&apos;s get you back on track.
          </p>

          <div className="notfound-actions">
            <Link href="/" className="btn-primary notfound-btn">
              <House />
              Back to Home
            </Link>
            <Link href="/all-tiles" className="btn-outline notfound-btn">
              <Magnifier />
              Browse Tiles
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
