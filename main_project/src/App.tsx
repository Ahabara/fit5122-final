import './App.css'
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Stat from "./components/Stat.tsx";
import ExploreCultures from "./components/ExploreCultures.tsx";
import Quiz from "./components/Quiz.tsx";

function App() {
  return (
    <>
        <div className="bg-myPurple">

            <NavBar/>
            <Hero/>
            <ExploreCultures/>
            <Quiz/>
            <Stat/>
        </div>
    </>
  )
}

export default App
