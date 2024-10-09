import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Header from "./Header";
import ProjectSection from "./ProjectSection";

function ContentSection() {
  return (
    <div className="w-full bg-[url('/cornered-stairs.svg')] bg-cover bg-center bg-no-repeat lg:h-screen lg:w-full lg:overflow-y-auto">
      <div className="lg:block">
        <Header />
      </div>
      <div className="space-y-8 p-4 sm:space-y-10 sm:p-6 lg:p-8">
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default ContentSection;
