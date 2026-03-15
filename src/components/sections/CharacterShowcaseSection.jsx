import { motion } from "framer-motion";
import React from "react";

const characters = [
  {
    name: "Michael",
    role: "The Strategist",
    image: "/Michale.webp",
    imageClass: "object-top",
    summary: "Calculated moves, high-risk heists, and cinematic precision.",
  },
  {
    name: "Franklin",
    role: "The Driver",
    image: "/franlin.png",
    imageClass: "object-center",
    summary: "Street instincts, speed control, and razor-sharp timing.",
  },
  {
    name: "Trevor",
    role: "The Chaos",
    image: "/trevor.webp",
    imageClass: "object-top",
    summary: "Unpredictable aggression that turns every mission volatile.",
  },
];

const CharacterShowcaseSection = () => {
  const MotionArticle = motion.article;

  return (
    <section
      data-scroll-section
      aria-labelledby="character-showcase-title"
      className="text-[#0f172a] px-4 sm:px-6 md:px-10 py-20 md:py-28 bg-[#ffffff]"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2
            id="character-showcase-title"
            className="text-3xl sm:text-4xl md:text-6xl leading-[0.95]"
          >
            Character Showcase
          </h2>
          <p className="mt-4 font-sans text-[#1e3a8a] text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Built as reusable, motion-first cards with accessible structure and
            mobile-first layout.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {characters.map((character, index) => (
            <MotionArticle
              key={character.name}
              className="group rounded-2xl overflow-hidden border border-[#93c5fd] bg-[#eff6ff] shadow-[0_12px_40px_rgba(59,130,246,0.2)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={character.image}
                  alt={`${character.name} portrait`}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover ${character.imageClass} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="p-5 md:p-6">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#1d4ed8]">
                  {character.role}
                </p>
                <h3 className="mt-2 text-3xl md:text-4xl leading-none">
                  {character.name}
                </h3>
                <p className="mt-3 font-sans text-sm md:text-base text-[#1e3a8a]">
                  {character.summary}
                </p>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcaseSection;
