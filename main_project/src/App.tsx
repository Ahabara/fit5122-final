import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ExploreCultures from "./components/landing/ExploreCultures.tsx";
import Footer from "./components/Footer.tsx";
import { GamePage } from "./components/landing/GamePage.tsx";

function App() {
  return (
    <>
      <div className="bg-myPurple">
        <NavBar />
        <Hero />
        <ExploreCultures />
        <GamePage />
        <Footer styling={"bg-purple-900 text-white"} />
      </div>
    </>
  );
}

export default App;
