import Layout from "../landing/Layout.tsx";
import Timeline from "./components/Timeline.tsx";
import JobsHero from "./components/JobsHero.tsx";
import JobsInfo from "./components/JobsInfo.tsx";
import JobDosAndDonts from "./JobDosAndDonts.tsx";
import { Link } from "react-router-dom";

const JobsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <JobsHero />
        <JobsInfo />
        <JobDosAndDonts />
        <Timeline />
        <div className="px-24 py-12">
          <Link
            to={"/"}
            onClick={() => window.scrollTo(0, 0)}
            className="group relative px-6 py-3 font-bold text-black"
          >
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
            <span className="relative">Take Me Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default JobsPage;
