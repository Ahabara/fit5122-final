import Layout from "../landing/Layout.tsx";
import SuburbMap from "./SuburbMap.tsx";
import ExploreHero from "./ExploreHero.tsx";
import Quiz from "../landing/Quiz.tsx";
import { Link } from "react-router-dom";
import SuburbExplorerSecondHero from "./SuburbExplorerSecondHero.tsx";

const Explore = () => {
  // TODO credit, freepik and unsplash

  return (
    <Layout>
      <ExploreHero />
      <SuburbExplorerSecondHero />
      <div className=" container mx-auto px-5">
        <Quiz />
        {/*  TODO workflow Quiz returns results then loads suburbMap on return*/}
        <SuburbMap city={"clayton"} />
        <div className=" py-8 pl-4">
          <Link
            to="/"
            className="group relative px-6 py-3 font-bold text-black"
          >
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
            <span className="relative">Go Back</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
