"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "@/styles/banner.css";

const bannerSlides = [
  {
    id: 1,
    src: "/images/banner/banner-1.jpg",
    alt: "Luxury marble bathroom interior",
  },
  {
    id: 2,
    src: "/images/banner/banner-2.jpg",
    alt: "Ceramic tile kitchen backsplash",
  },
  {
    id: 3,
    src: "/images/banner/banner-3.jpg",
    alt: "Modern living room stone floor",
  },
  {
    id: 4,
    src: "/images/banner/banner-4.jpg",
    alt: "Turquoise mosaic pool tiles",
  },
  {
    id: 5,
    src: "/images/banner/banner-5.jpg",
    alt: "Mediterranean terracotta floor interior",
  },
];

const Banner = () => {
  return (
    <section className="banner-section" aria-label="Hero banner">
      {/* ── Swiper Slider ── */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1000}
        allowTouchMove={true}
        keyboard={{ enabled: true }}
        className="banner-swiper"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="banner-slide">
            {/* Background Image */}
            <div className="banner-image-wrap">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.id === 1}
                quality={85}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            {/* Gradient Overlay */}
            <div className="banner-overlay" aria-hidden="true" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── Hero Content (outside Swiper, stays fixed while slides fade) ── */}
      <div className="banner-content">
        <div className="page-container banner-content-inner">
          <div className="banner-text-block">
            <p className="banner-eyebrow">Premium Tiles Gallery</p>

            <h1 className="banner-heading">
              Discover Your <br />
              <em>Perfect</em> Aesthetic.
            </h1>

            <p className="banner-subtext">
              Explore hundreds of handpicked tiles — from classic ceramics to
              luxury marble, crafted for spaces that inspire.
            </p>

            <div className="banner-actions">
              <Link href="/all-tiles" className="btn-primary banner-cta">
                Browse Now
                <span className="banner-cta-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
