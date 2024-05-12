import Layout from "../landing/Layout.tsx";
import Timeline from "./components/Timeline.tsx";
import JobsHero from "./components/JobsHero.tsx";
import JobsInfo from "./components/JobsInfo.tsx";

const JobsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <JobsHero />
        <JobsInfo />
        <Timeline />
        {/*<ResponsiveContainer width="50%" height={250}>*/}
        {/*  <AreaChart*/}
        {/*    data={data.job1_participationRate}*/}
        {/*    margin={{ top: 10, right: 30, left: 0, bottom: 20 }}*/}
        {/*  >*/}
        {/*    <defs>*/}
        {/*      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">*/}
        {/*        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />*/}
        {/*        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />*/}
        {/*      </linearGradient>*/}
        {/*    </defs>*/}
        {/*    <XAxis />*/}
        {/*    <YAxis domain={["dataMin", "dataMax"]} />*/}
        {/*    /!* Adjust interval as needed *!/*/}
        {/*    <Tooltip />*/}
        {/*    <Area*/}
        {/*      type="monotone"*/}
        {/*      dataKey="unemploymentRate"*/}
        {/*      stroke="#8884d8"*/}
        {/*      fillOpacity={1}*/}
        {/*      fill="url(#colorUv)"*/}
        {/*    />*/}
        {/*    <Area*/}
        {/*      type="monotone"*/}
        {/*      dataKey="participationRate"*/}
        {/*      stroke="#8884d8"*/}
        {/*      fillOpacity={1}*/}
        {/*      fill="url(#colorUv)"*/}
        {/*    />*/}
        {/*  </AreaChart>*/}
        {/*</ResponsiveContainer>*/}
        {/*<div className="h-96 w-128">*/}
        {/*  <ResponsiveContainer width="100%" height="100%">*/}
        {/*    <LineChart*/}
        {/*      width={500}*/}
        {/*      height={300}*/}
        {/*      data={data.job1_participationRate}*/}
        {/*      margin={{*/}
        {/*        top: 5,*/}
        {/*        right: 30,*/}
        {/*        left: 20,*/}
        {/*        bottom: 5,*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <CartesianGrid strokeDasharray="3 3" />*/}
        {/*      <XAxis dataKey="name" />*/}
        {/*      <YAxis yAxisId="left" domain={["auto", "auto"]} />*/}
        {/*      <YAxis*/}
        {/*        yAxisId="right"*/}
        {/*        orientation="right"*/}
        {/*        domain={["auto", "auto"]}*/}
        {/*      />*/}
        {/*      <Tooltip content={() => <p>IDK </p>} />*/}
        {/*      <Legend />*/}
        {/*      <Line*/}
        {/*        yAxisId="left"*/}
        {/*        type="monotone"*/}
        {/*        dataKey="participationRate"*/}
        {/*        stroke="#8884d8"*/}
        {/*        activeDot={{ r: 8 }}*/}
        {/*      />*/}
        {/*      <Line*/}
        {/*        yAxisId="right"*/}
        {/*        type="monotone"*/}
        {/*        dataKey="unemploymentRate"*/}
        {/*        stroke="#82ca9d"*/}
        {/*      />*/}
        {/*    </LineChart>*/}
        {/*  </ResponsiveContainer>*/}
        {/*</div>*/}
        {/*<div className="h-128">*/}
        {/*  {" "}*/}
        {/*  <ResponsiveContainer width="100%" height="100%">*/}
        {/*    <BarChart*/}
        {/*      width={500}*/}
        {/*      height={300}*/}
        {/*      data={data.job3_newWorkersByIndustry}*/}
        {/*      margin={{*/}
        {/*        top: 20,*/}
        {/*        right: 30,*/}
        {/*        left: 20,*/}
        {/*        bottom: 5,*/}
        {/*      }}*/}
        {/*    >*/}
        {/*      <CartesianGrid strokeDasharray="3 3" />*/}
        {/*      <XAxis dataKey="name" />*/}
        {/*      <YAxis />*/}
        {/*      <Tooltip />*/}
        {/*      <Legend />*/}
        {/*      <Bar*/}
        {/*        dataKey="higherOrderSkillsPercentage"*/}
        {/*        stackId="a"*/}
        {/*        fill="#8884d8"*/}
        {/*      />*/}
        {/*      <Bar dataKey="otherSkillsPercentage" stackId="a" fill="#82ca9d" />*/}
        {/*    </BarChart>*/}
        {/*  </ResponsiveContainer>*/}
        {/*</div>*/}
        {/*<div className="">*/}
        {/*  frm*/}
        {/*  <ResponsiveContainer width="100%" height="100%">*/}
        {/*    <PieChart width={1000} height={1000}>*/}
        {/*      <Pie*/}
        {/*        data={data.job4_proportionByIndustry}*/}
        {/*        dataKey="percentage"*/}
        {/*        cx="50%"*/}
        {/*        cy="50%"*/}
        {/*        outerRadius={60}*/}
        {/*        fill="#8884d8"*/}
        {/*      />*/}
        {/*      <Tooltip />*/}
        {/*    </PieChart>*/}
        {/*  </ResponsiveContainer>*/}
        {/*</div>*/}
        {/*<BarChart*/}
        {/*  width={500}*/}
        {/*  height={500}*/}
        {/*  data={data.job2_topOccupations}*/}
        {/*  layout={"vertical"}*/}
        {/*  margin={{ top: 10, right: 30, left: 0, bottom: 20 }}*/}
        {/*>*/}
        {/*  <CartesianGrid strokeDasharray="3 3" />*/}
        {/*  <XAxis type="number" dataKey="numberInDemand" />*/}
        {/*  <YAxis*/}
        {/*    dataKey="occupation"*/}
        {/*    type="category"*/}
        {/*    textAnchor="end"*/}
        {/*    interval={0}*/}
        {/*    tick={{ fontSize: 7 }}*/}
        {/*  />*/}
        {/*  <Tooltip*/}
        {/*    formatter={(value) => `${value.toString()} formatted value`}*/}
        {/*  />*/}
        {/*  <Legend />*/}
        {/*  <Bar dataKey="numberInDemand" fill="#8884d8" />*/}
        {/*</BarChart>*/}
      </div>
    </Layout>
  );
};

export default JobsPage;
