import Layout from "../landing/Layout.tsx";
import BankRates from "./BankRates.tsx";
import BankRatesHero from "./BankRatesHero.tsx";

const BankRatesPage = () => {
  return (
    <Layout>
      <BankRatesHero />
      <BankRates />
    </Layout>
  );
};

export default BankRatesPage;
