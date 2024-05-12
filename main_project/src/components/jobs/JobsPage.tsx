import Layout from "../landing/Layout.tsx";
import Timeline from "./components/Timeline.tsx";
import JobsHero from "./components/JobsHero.tsx";
import JobsInfo from "./components/JobsInfo.tsx";
import JobDosAndDonts from "./JobDosAndDonts.tsx";
import CTA from "../CTA.tsx";

const JobsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <JobsHero />
        <JobsInfo />
        <JobDosAndDonts />
        <Timeline />
        <CTA
          link="/about"
          paragraph={
            "Although we are new on the scene, we're committed to making a difference. Learn more about the team and what we are trying to achieve!"
          }
          title={"Want To Learn More About Us?"}
        />
      </div>
    </Layout>
  );
};

export default JobsPage;
