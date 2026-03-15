import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect, useRef } from "react";
import LandingPage from "./LandingPage";
import DownloadSection from "./DownloadSection";
import CinematicMissionSection from "./sections/CinematicMissionSection";
import CharacterShowcaseSection from "./sections/CharacterShowcaseSection";

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  const mainref = useRef(null);
  const navref = useRef(null);
  const locomotiveRef = useRef(null);

  useEffect(() => {
    const locomotive = new LocomotiveScroll({
      lenisOptions: {
        smoothWheel: true,
        syncTouch: true,
        lerp: 0.09,
      },
      scrollCallback: ScrollTrigger.update,
    });

    locomotiveRef.current = locomotive;
    ScrollTrigger.refresh();

    return () => {
      locomotive.destroy();
      locomotiveRef.current = null;
    };
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    const animateCommon = () => {
      gsap.to(".sky", {
        scale: 1.2,
        rotate: 0,
        duration: 2,
        delay: 0.2,
        ease: "Expo.easeInOut",
      });
      gsap.to(".bg", {
        scale: 1.2,
        rotate: 0,
        duration: 2,
        delay: 0.2,
        ease: "Expo.easeInOut",
      });
    };

    mm.add("(min-width: 768px)", () => {
      animateCommon();
      gsap.to(".character", {
        scale: 0.7,
        bottom: "-30%",
        rotate: 0,
        duration: 1.7,
        delay: 0.3,
        ease: "Expo.easeInOut",
      });

      const moveText = gsap.quickTo(".text-inner", "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      const moveSky = gsap.quickTo(".sky", "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      const moveBg = gsap.quickTo(".bg", "x", {
        duration: 0.5,
        ease: "power3.out",
      });
      const moveNav = gsap.quickTo(navref.current, "x", {
        duration: 0.3,
        ease: "power3.out",
      });

      const handleMouseMove = (e) => {
        let x = (e.clientX / window.innerWidth - 0.5) * 40;
        moveText(-x * 2.5);
        moveSky(-x * 2);
        moveBg(x * 2);
        moveNav(x * 1.2);
      };

      mainref.current?.addEventListener("mousemove", handleMouseMove);

      return () => {
        mainref.current?.removeEventListener("mousemove", handleMouseMove);
      };
    });

    mm.add("(max-width: 767px)", () => {
      animateCommon();
      gsap.to(".character", {
        scale: 1.1,
        bottom: "-10%",
        rotate: 0,
        duration: 2,
        delay: 0.2,
        ease: "Expo.easeInOut",
      });

      const moveText = gsap.quickTo(".text-inner", "x", {
        duration: 0.35,
        ease: "power3.out",
      });
      const moveSky = gsap.quickTo(".sky", "x", {
        duration: 0.4,
        ease: "power3.out",
      });
      const moveBg = gsap.quickTo(".bg", "x", {
        duration: 0.4,
        ease: "power3.out",
      });

      const handleTouchMove = (e) => {
        if (!e.touches?.length) return;
        const touchX = e.touches[0].clientX;
        const x = (touchX / window.innerWidth - 0.5) * 24;
        moveText(-x * 0.8);
        moveSky(-x * 1.1);
        moveBg(x * 1.3);
      };

      const handleTouchEnd = () => {
        moveText(0);
        moveSky(0);
        moveBg(0);
      };

      mainref.current?.addEventListener("touchmove", handleTouchMove);
      mainref.current?.addEventListener("touchend", handleTouchEnd);

      return () => {
        mainref.current?.removeEventListener("touchmove", handleTouchMove);
        mainref.current?.removeEventListener("touchend", handleTouchEnd);
      };
    });
    return () => mm.revert();
  }, []); 

  return (
    <main ref={mainref} className="main w-full bg-[#f8fbff]">
      <LandingPage navref={navref} />
      <DownloadSection />
      <CinematicMissionSection />
      <CharacterShowcaseSection />
    </main>
  );
};

export default MainContent;
