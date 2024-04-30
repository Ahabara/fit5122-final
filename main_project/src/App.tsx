import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ExploreCultures from "./components/landing/ExploreCultures.tsx";
import Footer from "./components/Footer.tsx";
import { GamePage } from "./components/landing/GamePage.tsx";
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
        <ExploreCultures />
        <GamePage />
        <Footer styling={"bg-purple-900 text-white"} />
      </div>
    </>
  );
}

export default App;
