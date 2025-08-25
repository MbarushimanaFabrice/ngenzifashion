import React from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { assets } from "../assets/assets";

function HomeSlide() {
  const slides = [
    {
      image: assets.women_clothes,
      eyebrow: 'NEW SEASON',
      title: 'Elevate Your Everyday',
      subtitle: 'Timeless essentials crafted for comfort and confidence.',
      ctas: [{ label: 'Shop Women', href: '/collection?category=Women' }]
    },
    {
      image: assets.men,
      eyebrow: 'JUST DROPPED',
      title: 'Fresh Fits for Him',
      subtitle: 'Clean cuts, premium fabrics, effortless style.',
      ctas: [{ label: 'Shop Men', href: '/collection?category=Men' }]
    },
    {
      image: assets.young,
      eyebrow: 'FAMILY FAVORITES',
      title: 'Style for Every Story',
      subtitle: 'Versatile looks for work, weekends, and everything between.',
      ctas: [{ label: 'Explore All', href: '/collection' }]
    },
  ];

  return (
    <Zoom
      scale={1.2}
      autoplay={true}
      duration={4000}
      transitionDuration={600}
      indicators
      arrows
    >
      {slides.map((s, idx) => (
        <div className="each-slide-effect" key={idx}>
          <div
            className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative h-full w-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-white max-w-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-8 sm:w-10 h-[2px] bg-white/80"></span>
                    <p className="uppercase tracking-wide text-xs sm:text-sm font-medium text-white/90">{s.eyebrow}</p>
                  </div>
                  <h1 className="prata-regular text-3xl sm:text-5xl lg:text-6xl leading-tight mb-3">
                    {s.title}
                  </h1>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-6">
                    {s.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {s.ctas.map((c, i) => (
                      <a
                        key={i}
                        href={c.href}
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-md hover:bg-white/90 transition"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Zoom>
  );
}

export default HomeSlide;