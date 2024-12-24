import TechStack from "./TechStack";

function AboutSection() {
  return (
    <section id="about" className="m-2 p-4">
      <div className="mx-auto max-w-screen-lg">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          About Me
        </h2>

        <p className="mt-2 text-justify text-sm text-gray-300 sm:mt-4 sm:text-base">
          Hello! My name is{" "}
          <span className="font-semibold text-blue-400">Kamran Shahzad</span>,
          and I’m a passionate developer who loves building things for the web.
          My journey into web development began during my studies in Computer
          Science, where I dove into creating websites and designing systems —
          combining both creativity and problem-solving.
        </p>

        <p className="mt-2 text-justify text-sm text-gray-300 sm:mt-4 sm:text-base">
          Right now, my primary focus is on developing scalable, efficient
          systems and creating smooth, user-centric digital experiences.{" "}
          <span className="font-semibold text-blue-400">
            Here are some technologies I&apos;ve been working with recently:
          </span>
        </p>
        <TechStack />
      </div>
    </section>
  );
}

export default AboutSection;
