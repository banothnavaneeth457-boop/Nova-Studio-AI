import PromptBox from "./PromptBox";
import QuickCreate from "./QuickCreate";
import Features from "./Features";

function Hero() {
  return (
    <section className="text-center mt-20 px-6 font-sans">

      <h1 className="text-6xl font-bold">
        Create <span className="text-purple-500">Anything</span> with AI
      </h1>

      <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
        Generate images, videos, reels, voiceovers and much more from a single prompt.
      </p>

      <PromptBox />

      <QuickCreate />

      <Features />


    </section>
  );
}

export default Hero;