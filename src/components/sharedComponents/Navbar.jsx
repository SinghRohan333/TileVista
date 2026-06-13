"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import "@/styles/navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Tiles", href: "/all-tiles" },
  { label: "My Profile", href: "/my-profile" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  return (
    <header className="navbar-wrapper">
      <div className="page-container navbar-inner">
        {/* ── LEFT: Logo ── */}
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect
                x="1"
                y="1"
                width="11"
                height="11"
                rx="2"
                fill="var(--tv-color-primary)"
              />
              <rect
                x="15"
                y="1"
                width="11"
                height="11"
                rx="2"
                fill="var(--tv-color-primary-light)"
              />
              <rect
                x="1"
                y="15"
                width="11"
                height="11"
                rx="2"
                fill="var(--tv-color-primary-light)"
              />
              <rect
                x="15"
                y="15"
                width="11"
                height="11"
                rx="2"
                fill="var(--tv-color-primary)"
              />
            </svg>
          </span>
          <span className="navbar-logo-text">TileVista</span>
        </Link>

        {/* ── CENTER: Nav Links (desktop) ── */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${isActive(link.href) ? "navbar-link--active" : ""}`}
            >
              {link.label}
              <span className="navbar-link-underline" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        {/* ── RIGHT: Auth Button (desktop) ── */}
        <div className="navbar-auth">
          <Link href="/login">
            <Button className="navbar-login-btn" variant="bordered" size="sm">
              Login
            </Button>
          </Link>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <Xmark width={22} height={22} />
          ) : (
            <Bars width={22} height={22} />
          )}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`navbar-mobile-menu ${menuOpen ? "navbar-mobile-menu--open" : ""}`}
      >
        <nav className="navbar-mobile-links" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-mobile-link ${isActive(link.href) ? "navbar-mobile-link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="navbar-mobile-divider" />
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <Button
              className="navbar-login-btn"
              variant="bordered"
              size="sm"
              fullWidth
            >
              Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
