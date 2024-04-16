import Layout from "../../landing/Layout.tsx";
import { SuperHero } from "./SuperHero.tsx";
import { Festivals } from "../../festival/Festivals.tsx";
import SuperExplained from "./SuperExplained.tsx";

const Super = () => {
  return (
    <Layout>
      <SuperHero />
      <SuperExplained />
      <Festivals />
    </Layout>
  );
};

export default Super;
