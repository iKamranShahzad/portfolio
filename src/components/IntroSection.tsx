import { useState } from "react";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

function IntroSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const slideInWithFade = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="relative w-full flex-shrink-0 bg-[url('/slanted-gradient.svg')] bg-cover bg-center bg-no-repeat p-4 sm:p-6 lg:w-[45%] lg:p-8"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <SocialLinks />

      <motion.div
        className="flex flex-col justify-start space-y-4 sm:space-y-6"
        variants={container}
      >
        {/* Profile Image with Slide-in and Fade */}
        <motion.div
          className="group mx-auto h-32 w-32 [perspective:1000px] sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
          variants={slideInWithFade}
        >
          <motion.div
            className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <img
                src="slanted-pfp.webp"
                alt="Kamran Shahzad"
                className="h-full w-full rounded-full object-cover ring-4 ring-neutral-200"
              />
            </div>
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <img
                src="alternate-picture.webp"
                alt="Alternate view"
                className="h-full w-full rounded-full object-cover ring-4 ring-gray-700"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center lg:text-left"
          variants={slideInWithFade}
        >
          <p className="text-sm text-blue-400 sm:text-base">Hi, my name is</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Kamran Shahzad.
          </h1>
          <h2 className="text-2xl font-bold text-gray-400 sm:text-3xl lg:text-4xl xl:text-5xl">
            I build things for the web.
          </h2>
          <p className="mt-2 text-sm text-gray-300 sm:mt-4 sm:text-base lg:text-lg">
            I'm a web developer specializing in building exceptional websites
            and web applications. Currently, I'm focused on crafting responsive,
            user-centered products.
          </p>
        </motion.div>

        <motion.div
          className="text-center lg:text-left"
          variants={slideInWithFade}
        >
          <motion.a
            href="#projects"
            className="inline-block rounded-md border border-blue-400 px-4 py-2 text-sm text-blue-400 transition-colors hover:bg-blue-500 hover:font-semibold hover:text-gray-900 sm:px-6 sm:py-3 sm:text-base"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Take a look at my CV!
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default IntroSection;
