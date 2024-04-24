import Layout from "../landing/Layout.tsx";
import BankRates from "./BankRates.tsx";
import BankHero from "./BankHero.tsx";
import UnderstandBanking from "./UnderstandBanking.tsx";
import BankFAQ from "./BankFAQ.tsx";
import BankCommonTerms from "./BankCommonTerms.tsx";
import CTA from "./CTA.tsx";

const BankPage = () => {
  return (
    <Layout>
      <BankHero />
      <UnderstandBanking />
      <BankCommonTerms />
      <BankFAQ />
      <CTA />
      <BankRates />
    </Layout>
  );
};

export default BankPage;
