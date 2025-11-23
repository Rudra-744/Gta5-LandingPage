import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";
import LandingPage from "./LandingPage";
import DownloadSection from "./DownloadSection";

const MainContent = () => {
  const mainref = useRef(null);
  const navref = useRef(null);

  useGSAP(() => {
    // Initial zoom-in animation for the whole page
    gsap.to(mainref.current, {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "power3.out",
    });
    gsap.to(".sky", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 0.7,
      x: "-50%",
      bottom: "-40%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    // Parallax mouse-move listener
    const handleMouseMove = (e) => {
      let x = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".text", {
        x: `${-x * 0.5}% `,
        ease: "power3.easeOut",
        duration: 0.5,
      });
      gsap.to(".sky", {
        x: -x * 1.2,
        ease: "power3.easeOut",
        duration: 0.5,
      });
      gsap.to(".bg", {
        x: x * 1.5,
        ease: "power3.easeOut",
        duration: 0.5,
      });
      gsap.to(navref.current, {
        x: x * 0.2,
        ease: "power3.easeOut",
        duration: 0.3,
      });
    };

    mainref.current?.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      mainref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); 

  return (
    <div ref={mainref} className="main w-full rotate-[-20deg] scale-[1.7]">
      <LandingPage navref={navref} />
      <DownloadSection />
    </div>
  );
};

export default MainContent;