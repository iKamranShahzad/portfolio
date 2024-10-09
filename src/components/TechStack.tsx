import { techStackData } from "../data/TechStackData";
import { motion } from "framer-motion";

const clickSound = new Audio("/sounds/click.mp3");

const TechStack = () => {
  const playSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.04,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-3xl px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {techStackData.map((tech, index) => (
            <motion.div
              key={index}
              className="relative flex transform cursor-pointer flex-col items-center justify-center rounded-lg bg-gradient-to-r from-slate-700 to-purple-900 p-4 transition-shadow duration-300"
              onMouseEnter={playSound}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={variants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="z-10 mb-2">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 transform transition-transform duration-300"
                />
              </div>
              <div className="z-10 text-center">
                <h3 className="hidden text-sm font-bold text-white sm:block">
                  {tech.name}
                </h3>
              </div>
              <div className="absolute inset-0 z-0 rounded-lg bg-gray-900 opacity-0 transition-opacity duration-300 hover:opacity-25"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
