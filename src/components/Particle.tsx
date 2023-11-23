import Particles from "react-tsparticles";

const Shimmer = () => {
  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "inherit",
          },
        },
        fpsLimit: 10,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 1.5, factor: 1 },
          },
        },
        particles: {
          color: {
            value: "#bbbbbb",
          },
          links: {
            color: "#bbbbbb",
            distance: 50,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 0.75,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            image: {
              height: 100,
              replace_color: true,
              src: "images/github.svg",
              width: 100,
            },
            polygon: { nb_sides: 5 },
            stroke: { color: "#000000", width: 0 },
            type: "circle",
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5,
          },
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          url: "",
        },
        detectRetina: true,
      }}
    />
  );
};

export default Shimmer;
