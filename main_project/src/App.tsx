import './App.css'
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Stat from "./components/Stat.tsx";
import ExploreCultures from "./components/ExploreCultures.tsx";
import Quiz from "./components/Quiz.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
        <div className="bg-myPurple">

            <NavBar/>
            <Hero/>
            <ExploreCultures/>
            <Quiz/>
            <Stat/>
            <Footer/>
        </div>
    </>
  )
}

export default App
