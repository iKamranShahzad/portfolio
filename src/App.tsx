import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import TechStack from "./components/TechStack";
import ProjectSection from "./components/ProjectSection";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-800 text-white lg:flex-row">
      {" "}
      <IntroSection />
      {/* Right Section: Static Area with Header */}
      <div className="w-full bg-[url('/cornered-stairs.svg')] bg-cover bg-center bg-no-repeat lg:h-screen lg:w-full lg:overflow-y-auto">
        {/* Header is inside the right section for larger screens */}
        <div className="lg:block">
          <Header />
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8 p-4 sm:space-y-10 sm:p-6 lg:p-8">
          {/* About Section */}
          <section id="about" className="m-2 p-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              About Me
            </h2>
            <p className="mt-2 text-justify text-sm text-gray-300 sm:mt-4 sm:text-base">
              Hello! My name is{" "}
              <span className="font-semibold text-blue-400">
                Kamran Shahzad
              </span>
              , and I’m a passionate developer who loves building things for the
              web. My journey into web development began during my studies in
              Computer Science, where I dove into creating websites and
              designing systems — combining both creativity and problem-solving.
            </p>
            <p className="mt-2 text-justify text-sm text-gray-300 sm:mt-4 sm:text-base">
              Right now, my primary focus is on developing scalable, efficient
              systems and creating smooth, user-centric digital experiences.{" "}
              <span className="font-semibold text-blue-400">
                Here are some technologies I’ve been working with recently:
              </span>
            </p>
            <TechStack />
          </section>

          {/* Projects Section */}
          <ProjectSection />

          {/* Contact Me Section */}
          <section id="contact" className="m-2 p-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Contact Me
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
