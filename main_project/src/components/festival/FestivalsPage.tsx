import Layout from "../landing/Layout.tsx";
import { Festivals } from "./Festivals.tsx";
import FestivalHero from "./FestivalHero.tsx";
import CTA from "../CTA.tsx";

const FestivalsPage = () => {
  return (
    <>
      <Layout>
        <FestivalHero />
        <Festivals />
        <CTA
          link={"/finance/rates"}
          title={"Ready to Roll Up Your Sleeves and Sort Out Your Finances?"}
          paragraph={
            "Let us help you get control of your finances and build a propserous future yourself in Australia! "
          }
        />
      </Layout>
    </>
  );
};

export default FestivalsPage;
