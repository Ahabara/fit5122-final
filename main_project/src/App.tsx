import './App.css'
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
// import Stat from "./components/Stat.tsx";
import ExploreCultures from "./components/landing/ExploreCultures.tsx";
// import Quiz from "./components/landing/Quiz.tsx";
import Footer from "./components/Footer.tsx";
import {GamePage} from "./components/landing/GamePage.tsx";

function App() {
  return (
    <>
        <div className="bg-myPurple">

            <NavBar/>
            <Hero/>
            <ExploreCultures/>
            <GamePage/>
            <Footer/>
        </div>
    </>
  )
}

export default App
