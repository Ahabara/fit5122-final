import './App.css'
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import Stat from "./components/Stat.tsx";

function App() {
  return (
    <>
        <div className="bg-myPurple">

            <NavBar/>
            <Hero/>
            <Cards/>
            <Stat/>
        </div>
    </>
  )
}

export default App
