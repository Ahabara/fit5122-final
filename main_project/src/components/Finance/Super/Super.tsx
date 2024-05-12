import Layout from "../../landing/Layout.tsx";
import { SuperHero } from "./SuperHero.tsx";
import SuperContent from "./SuperContent.tsx";
import Warning from "../Warning.tsx";
import CTA from "../../CTA.tsx";

const Super = () => {
  return (
    <Layout>
      <Warning />
      <SuperHero />
      <SuperContent />
      <CTA
        link={"/dashboard"}
        title={"Make Your Money Work For You By Investing Your Money!"}
        paragraph={
          "Get ahead in life and start investing your money. Not sure how? Not sure where to start? We can help!"
        }
      />
    </Layout>
  );
};

export default Super;
