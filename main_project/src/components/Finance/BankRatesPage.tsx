import Layout from "../landing/Layout.tsx";
import BankRates from "./BankRates.tsx";
import BankRatesHero from "./BankRatesHero.tsx";
import Warning from "./Warning.tsx";

const BankRatesPage = () => {
  return (
    <Layout>
      <Warning />
      <BankRatesHero />
      <BankRates />
    </Layout>
  );
};

export default BankRatesPage;
