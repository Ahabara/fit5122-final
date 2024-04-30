import Layout from "../../landing/Layout.tsx";
import { SuperHero } from "./SuperHero.tsx";
import SuperContent from "./SuperContent.tsx";
import { Link } from "react-router-dom";
import Warning from "../Warning.tsx";

const Super = () => {
  return (
    <Layout>
      <Warning />
      <SuperHero />
      <SuperContent />
      <div className="container mx-auto py-8 pl-4">
        <Link to="/" className="group relative px-6 py-3 font-bold text-black">
          <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
          <span className="relative">Go Home</span>
        </Link>
      </div>
    </Layout>
  );
};

export default Super;
