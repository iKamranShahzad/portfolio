const clickSound = new Audio("/sounds/click.mp3");

const techStackData = [
  { name: "Next.js", logo: "https://skillicons.dev/icons?i=nextjs" },
  { name: "React", logo: "https://skillicons.dev/icons?i=react" },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwindcss" },
  { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Javascript", logo: "https://skillicons.dev/icons?i=js" },
  { name: "Typescript", logo: "https://skillicons.dev/icons?i=ts" },
  { name: "GoLang", logo: "https://skillicons.dev/icons?i=go" },
  { name: "Github", logo: "https://skillicons.dev/icons?i=github" },
];

const TechStack = () => {
  const playSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {techStackData.map((tech, index) => (
            <div
              key={index}
              className="relative flex transform cursor-pointer flex-col items-center justify-center rounded-lg bg-gradient-to-r from-slate-700 to-purple-900 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              onMouseEnter={playSound}
            >
              <div className="z-10 mb-2">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-12 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="z-10 text-center">
                <h3 className="hidden text-sm font-bold text-white sm:block">
                  {tech.name}
                </h3>
              </div>
              <div className="absolute inset-0 z-0 rounded-lg bg-gray-900 opacity-0 transition-opacity duration-300 hover:opacity-25"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
