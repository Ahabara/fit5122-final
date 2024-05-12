import Layout from "../landing/Layout.tsx";
import BankRates from "./BankRates.tsx";
import BankRatesHero from "./BankRatesHero.tsx";
import Warning from "./Warning.tsx";
import CTA from "../CTA.tsx";

const BankRatesPage = () => {
  return (
    <Layout>
      <Warning />
      <BankRatesHero />
      <BankRates />
      <CTA
        link={"/finance/super"}
        title={
          "Conquer Tomorrow Today! We Can Help You Wrap Your Head Around Super!"
        }
        paragraph={
          "Don't wait until it's too late to be in charge of your retirement! Australia has one of the most advance and benefecial retirement scheme. Let us explain it to you!"
        }
      />
    </Layout>
  );
};

export default BankRatesPage;
