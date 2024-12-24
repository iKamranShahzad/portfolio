import { motion } from "framer-motion";

const Header = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#3b3b3b" },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="w-full p-6"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <motion.a
          onClick={() => scrollToSection("contact")}
          className="cursor-pointer rounded-md bg-gradient-to-r from-slate-700 to-purple-900 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
        >
          Hire Me
        </motion.a>

        <nav className="space-x-4">
          <motion.a
            onClick={() => scrollToSection("about")}
            className="cursor-pointer text-gray-300 hover:text-white"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3 }}
          >
            About
          </motion.a>
          <motion.a
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer text-gray-300 hover:text-white"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Projects
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
