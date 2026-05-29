import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

interface FloatingItem {
  text: string;
  x: string;
  y: string;
  size: string;
  speed: number;
  opacity: number;
  colorClass: string;
  rotation: string;
}

const floatingItems: FloatingItem[] = [
  // Section 1: Hero area (top 0% to 20%)
  { text: "</>", x: "6%", y: "4%", size: "text-6xl md:text-8xl font-black", speed: 0.15, opacity: 0.68, colorClass: "text-primary", rotation: "-rotate-12" },
  { text: "{ }", x: "85%", y: "9%", size: "text-7xl md:text-9xl font-black", speed: 0.25, opacity: 0.62, colorClass: "text-secondary", rotation: "rotate-12" },
  { text: "const [data, setData] = useState(null);", x: "62%", y: "3%", size: "text-base md:text-xl font-bold", speed: 0.08, opacity: 0.55, colorClass: "text-accent", rotation: "-rotate-6" },
  { text: "import { Elysia } from 'elysia';", x: "5%", y: "15%", size: "text-lg md:text-2xl font-bold", speed: 0.18, opacity: 0.58, colorClass: "text-primary", rotation: "rotate-3" },

  // Section 2: About / Skills area (top 20% to 50%)
  { text: "=>", x: "84%", y: "24%", size: "text-5xl md:text-7xl font-bold", speed: 0.22, opacity: 0.65, colorClass: "text-secondary", rotation: "rotate-45" },
  { text: "class Developer extends Human {", x: "8%", y: "29%", size: "text-lg md:text-2xl font-bold", speed: 0.1, opacity: 0.48, colorClass: "text-accent", rotation: "-rotate-3" },
  { text: "git commit -m 'deploy production'", x: "70%", y: "34%", size: "text-lg md:text-2xl font-bold", speed: 0.2, opacity: 0.55, colorClass: "text-primary", rotation: "rotate-6" },
  { text: "await db.select().from(users);", x: "6%", y: "42%", size: "text-base md:text-xl font-bold", speed: 0.14, opacity: 0.52, colorClass: "text-accent", rotation: "-rotate-2" },

  // Section 3: Projects area (top 50% to 80%)
  { text: "docker run -d -p 5432:5432 postgres", x: "82%", y: "55%", size: "text-base md:text-xl font-bold", speed: 0.28, opacity: 0.58, colorClass: "text-primary", rotation: "rotate-2" },
  { text: "pip install django django-cors-headers", x: "4%", y: "63%", size: "text-base md:text-xl font-bold", speed: 0.12, opacity: 0.52, colorClass: "text-accent", rotation: "-rotate-6" },
  { text: "[ ...stack ]", x: "78%", y: "71%", size: "text-3xl md:text-5xl font-bold", speed: 0.24, opacity: 0.62, colorClass: "text-secondary", rotation: "rotate-12" },
  { text: "map((item) => <Card key={item.id} />)", x: "8%", y: "79%", size: "text-lg md:text-2xl font-bold", speed: 0.16, opacity: 0.55, colorClass: "text-primary", rotation: "rotate-6" },

  // Section 4: Contact / Footer area (top 80% to 100%)
  { text: "npm run build && bun run dev", x: "74%", y: "87%", size: "text-base md:text-xl font-bold", speed: 0.1, opacity: 0.54, colorClass: "text-accent", rotation: "-rotate-3" },
  { text: "SSL_CERTIFICATE_SUCCESS", x: "5%", y: "93%", size: "text-lg md:text-2xl font-bold", speed: 0.26, opacity: 0.58, colorClass: "text-secondary", rotation: "rotate-6" },
  { text: "nginx -s reload", x: "80%", y: "97%", size: "text-lg md:text-2xl font-bold", speed: 0.2, opacity: 0.56, colorClass: "text-primary", rotation: "-rotate-6" }
];

const ParallaxItem: React.FC<{ item: FloatingItem; scrollY: MotionValue<number> }> = ({ item, scrollY }) => {
  const yTransform = useTransform(scrollY, [0, 4000], [0, -4000 * item.speed]);

  return (
    <motion.div
      className={`absolute font-mono pointer-events-none select-none ${item.size} ${item.colorClass} ${item.rotation}`}
      style={{
        left: item.x,
        top: item.y,
        y: yTransform,
        opacity: item.opacity,
        textShadow: "0 0 12px var(--brand-primary)",
      }}
    >
      {item.text}
    </motion.div>
  );
};

export const ParallaxBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full min-h-screen pointer-events-none overflow-hidden z-20">
      {floatingItems.map((item, idx) => (
        <ParallaxItem key={idx} item={item} scrollY={scrollY} />
      ))}
    </div>
  );
};

export default ParallaxBackground;
