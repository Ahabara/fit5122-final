import Layout from "../landing/Layout.tsx";
import ExploreHero from "./ExploreHero.tsx";
import SuburbExplorerSecondHero from "./SuburbExplorerSecondHero.tsx";
import ExplorerQuiz from "./ExplorerQuiz.tsx";
import CTA from "../CTA.tsx";

const Explore = () => {
  // TODO credit, freepik and unsplash
  return (
    <Layout>
      <ExploreHero />
      <SuburbExplorerSecondHero />
      <ExplorerQuiz />
      <CTA
        link={"/festivals"}
        title={"Done Exploring Melbourne? Maybe It's Time to Celebrate!"}
        paragraph={
          "Explore the different festivities that you can partake in! Indulge in the diversity of Victoria!"
        }
      />
    </Layout>
  );
};

export default Explore;
