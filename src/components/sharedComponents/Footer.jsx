import Link from "next/link";
import { Envelope, Phone, MapPin, Handset } from "@gravity-ui/icons";
import "@/styles/footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="page-container footer-container">
        {/* Top section */}
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <h2 className="footer-logo">TileVista</h2>
            <p className="footer-tagline">
              Curated tiles for spaces that tell a story. Warm textures,
              timeless craft, premium quality — delivered to your door.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Twitter"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Explore</h3>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h3 className="footer-col-title">Support</h3>
            <ul className="footer-links">
              <li>
                <Link href="/faq" className="footer-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="footer-link">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>123 Artisan Lane, Ceramic District, Dhaka</span>
              </li>
              <li className="footer-contact-item">
                <Handset className="footer-contact-icon" />
                <a href="tel:+8801234567890" className="footer-link">
                  +880 123 456 7890
                </a>
              </li>
              <li className="footer-contact-item">
                <Envelope className="footer-contact-icon" />
                <a href="mailto:hello@tilevista.com" className="footer-link">
                  hello@tilevista.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} TileVista. All rights reserved.
          </p>
          <p className="footer-credit">
            Crafted with care for spaces that inspire.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
