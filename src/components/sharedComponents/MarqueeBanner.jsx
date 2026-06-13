import Marquee from "react-fast-marquee";
import "@/styles/marquee.css";

const marqueeItems = [
  { type: "text", content: "New Arrivals" },
  { type: "tile", content: "Azure Ceramic Classic" },
  { type: "text", content: "Weekly Feature: Modern Geometric Patterns" },
  { type: "tile", content: "Carrara Marble Elite" },
  { type: "text", content: "Free Shipping Over $200" },
  { type: "tile", content: "Nordic Oak Wood Look" },
  { type: "text", content: "Join the Community" },
  { type: "tile", content: "Emerald Mosaic Art" },
  { type: "text", content: "Handpicked Premium Collections" },
  { type: "tile", content: "Tuscan Gold Marble" },
  { type: "text", content: "New Season Styles Available Now" },
  { type: "tile", content: "Cobalt Hex Mosaic" },
];

const MarqueeBanner = () => {
  return (
    <div className="marquee-wrapper" aria-label="Announcements ticker">
      <Marquee speed={45} gradient={false} pauseOnHover={true} loop={0}>
        {marqueeItems.map((item, index) => (
          <span key={index} className="marquee-item-group">
            {item.type === "text" ? (
              <span className="marquee-text">{item.content}</span>
            ) : (
              <span className="marquee-tile-pill">{item.content}</span>
            )}

            <span className="marquee-separator" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;
