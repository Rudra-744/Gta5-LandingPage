import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

// Receives onComplete prop from App.jsx
const IntroAnimation = ({ onComplete }) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 17,
      duration: 2.2,
      transformOrigin: "50% 50%",
      ease: "power4.easeInOut",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.7) {
          onComplete(); 
        
          this.kill();
        }
      },
    });
  });

  return (
    <div className="svg fixed flex items-center justify-center top-0 left-0 z-10 w-full h-full overflow-hidden bg-black">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className="vi-mask-group">
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image
          href="/bg.png" 
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#viMask)"
        />
      </svg>
    </div>
  );
};

export default IntroAnimation;