import { Toaster } from "react-hot-toast";
import ContentSection from "./components/ContentSection";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-800 text-white lg:flex-row">
      <Toaster position="bottom-left" reverseOrder={false} />
      <IntroSection />
      <ContentSection />
    </div>
  );
}

export default App;
