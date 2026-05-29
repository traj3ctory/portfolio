import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState } from "react";
import { useEffectOnce } from "~/hooks";

const Shimmer = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffectOnce(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  });

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={{
            fullScreen: { enable: false },
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                push: { quantity: 4 },
              },
            },
            particles: {
              color: {
                value:
                  (typeof window !== "undefined" &&
                    getComputedStyle(document.documentElement)
                      .getPropertyValue("--color-muted")
                      ?.trim()) ||
                  "#bbbbbb",
              },
              links: {
                enable: false,
              },
              collisions: { enable: false },
              move: {
                enable: true,
                direction: "none",
                speed: 0.5,
                outModes: { default: "out" },
              },
              number: {
                value: 40,
                density: { enable: true, width: 800, height: 800 },
              },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 4 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default Shimmer;
