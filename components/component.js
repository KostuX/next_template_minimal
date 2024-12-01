import { useEffect, useState, useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Component() {
  const load = useRef(null);
  useEffect(() => {
    const el = load.current;
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);

  return (
    <ParallaxProvider>
      <div ref={load} className="justify-between h-screen text-center ">
        <Parallax speed={1}>
          <div>
            <div className="border  m-5  border-theme_secondary">
              Top Center
            </div>
          </div>
        </Parallax>
        <div className="grid grid-cols-2 gap-4  m-3 ">
          <Parallax speed={-1}>
            <div className="border  border-theme_secondary  h-56">
              Left Panel
            </div>
          </Parallax>
          <Parallax speed={5}>
            <div className="border  border-theme_secondary  h-56">
              Right Panel
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  );
}
