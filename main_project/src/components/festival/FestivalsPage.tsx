import Layout from "../landing/Layout.tsx";
import { Festivals } from "./Festivals.tsx";
import FestivalHero from "./FestivalHero.tsx";

const FestivalsPage = () => {
  return (
    <>
      <Layout>
        <FestivalHero />
        <Festivals />
      </Layout>
    </>
  );
};

export default FestivalsPage;
