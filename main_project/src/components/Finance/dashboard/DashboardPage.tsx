import Layout from "../../landing/Layout.tsx";
import Dashboard from "../Dashboard.tsx";
import Warning from "../Warning.tsx";

const DashboardPage = () => {
  return (
    <Layout styling={""}>
      <Warning />
      <Dashboard />
    </Layout>
  );
};

export default DashboardPage;
