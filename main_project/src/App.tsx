import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.tsx";
import WorkHardPlayHard from "./WorkHardPlayHard.tsx";
import JourneyMap from "./JourneyMap.tsx";

function App() {
  return (
    <>
      <JourneyMap />
      <div className="bg-myPurple">
        <NavBar />
        <Hero />
        <WorkHardPlayHard />
        <Footer styling={"bg-neutral-900 text-gray-400"} />
      </div>
    </>
  );
}

export default App;
