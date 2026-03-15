import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CinematicMissionSection = () => {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !frameRef.current) return;

      gsap.fromTo(
        frameRef.current,
        {
          scale: 0.9,
          borderRadius: 24,
        },
        {
          width: "100vw",
          height: "100vh",
          maxWidth: "100vw",
          scale: 1,
          borderRadius: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 0",
            end: "+=140%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        },
      );

     
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      data-scroll-section
      className="relative min-h-[100vh] text-[#0f172a] bg-[#ffffff]"
      aria-label="Cinematic mission reveal section"
    >

      <div className="h-screen w-full flex items-center justify-center overflow-hidden rounded-2xl">
        <div
          ref={frameRef}
          className="relative  w-[70vw] md:w-[50vw] h-[40vw] md:h-[28vw] max-w-6xl bg-black border border-[#facc15] overflow-hidden will-change-transform origin-center shadow-[0_20px_80px_rgba(37,99,235,0.25)]"
          role="img"
          aria-label="Cinematic mission preview video"
        >
          <video
            className="h-full w-full object-cover "
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/mainimg.jpg"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-night-drive-through-the-city-1569559158658?download=1080p"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>
    </section>
  );
};

export default CinematicMissionSection;
