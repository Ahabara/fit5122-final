import Layout from "../landing/Layout.tsx";
import SuburbMap from "./SuburbMap.tsx";
import ExploreHero from "./ExploreHero.tsx";
import Quiz from "../landing/Quiz.tsx";
import {Link} from "react-router-dom";

const Explore = () => {
    // TODO credit, freepik and unsplash
    return (
        <Layout>
            <ExploreHero/>
            <div className=" container mx-auto px-5">
                <Quiz/>
                <SuburbMap city={"clayton"}/>
                <div className=" py-8 pl-4">
                    <Link to="/" className="relative px-6 py-3 font-bold text-black group">
                            <span
                                className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-myPurple group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                        <span className="relative">
                                Go Back</span>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Explore;