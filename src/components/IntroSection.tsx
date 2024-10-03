import { useState } from "react";
import SocialLinks from "./SocialLinks";

function IntroSection() {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="w-full flex-shrink-0 bg-neutral-900 p-4 sm:p-6 lg:w-1/2 lg:p-8">
      <div className="flex flex-col justify-start space-y-4 sm:space-y-6">
        <SocialLinks />
        <div
          className="group mx-auto h-32 w-32 [perspective:1000px] sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <div
            className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
              isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <img
                src="profile-picture.webp"
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
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm text-blue-400 sm:text-base">Hi, my name is</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Kamran Shahzad.
          </h1>
          <h2 className="text-2xl font-bold text-gray-400 sm:text-3xl lg:text-4xl xl:text-5xl">
            I build things for the web.
          </h2>
          <p className="mt-2 text-sm text-gray-300 sm:mt-4 sm:text-base lg:text-lg">
            I'm a full-stack developer specializing in building exceptional
            websites and web applications. Currently, I'm focused on crafting
            responsive, user-centered products.
          </p>
        </div>

        <div className="text-center lg:text-left">
          <a
            href="#projects"
            className="inline-block rounded-md border border-blue-400 px-4 py-2 text-sm text-blue-400 transition-colors hover:bg-blue-500 hover:font-semibold hover:text-gray-900 sm:px-6 sm:py-3 sm:text-base"
          >
            Take a look at my CV!
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
