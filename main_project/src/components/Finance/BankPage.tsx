import Layout from "../landing/Layout.tsx";
import BankHero from "./BankHero.tsx";
import UnderstandBanking from "./UnderstandBanking.tsx";
import BankFAQ from "./BankFAQ.tsx";
import BankCommonTerms from "./BankCommonTerms.tsx";
import CTA from "./CTA.tsx";
import { Link } from "react-router-dom";
import Warning from "./Warning.tsx";

const BankPage = () => {
  return (
    <Layout styling={"bg-neutral-800 text-white"}>
      <Warning />
      <BankHero />
      <UnderstandBanking />
      <BankCommonTerms />
      <BankFAQ />
      <CTA />
      <div className="w-screen bg-neutral-800">
        <div className="container mx-auto   py-8 pl-4">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="group relative px-6 py-3 font-bold text-black"
          >
            <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
            <span className="relative">Go Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default BankPage;
