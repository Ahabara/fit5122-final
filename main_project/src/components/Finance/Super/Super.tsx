import Layout from "../../landing/Layout.tsx";
import { SuperHero } from "./SuperHero.tsx";
import SuperExplained from "./SuperExplained.tsx";

const Super = () => {
  return (
    <Layout>
      <SuperHero />
      <SuperExplained />
    </Layout>
  );
};

export default Super;
