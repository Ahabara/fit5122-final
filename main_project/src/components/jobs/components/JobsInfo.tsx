import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const tickFormatter = (value: string) => {
  const limit = 20; // put your maximum character
  if (value.length < limit) return value;
  return `${value.substring(0, limit)}...`;
};
const JobsInfo = () => {
  const data = {
    job1_title: "Participation and unemployment rates in Victoria (2013-2023)",
    job1_participationRate: [
      {
        year: 2013,
        unemploymentRate: 5.6,
        participationRate: 64.8,
      },
      {
        year: 2014,
        unemploymentRate: 6.2,
        participationRate: 64.4,
      },
      {
        year: 2015,
        unemploymentRate: 6.2,
        participationRate: 65.1,
      },
      {
        year: 2016,
        unemploymentRate: 5.8,
        participationRate: 64.9,
      },
      {
        year: 2017,
        unemploymentRate: 6.0,
        participationRate: 66.1,
      },
      {
        year: 2018,
        unemploymentRate: 5.0,
        participationRate: 65.4,
      },
      {
        year: 2019,
        unemploymentRate: 4.9,
        participationRate: 66.0,
      },
      {
        year: 2020,
        unemploymentRate: 6.8,
        participationRate: 63.4,
      },
      {
        year: 2021,
        unemploymentRate: 4.7,
        participationRate: 66.4,
      },
      {
        year: 2022,
        unemploymentRate: 3.8,
        participationRate: 66.85,
      },
      {
        year: 2023,
        unemploymentRate: 3.7,
        participationRate: 67.6,
      },
    ],
    job2_title:
      "Top 20 occupations in demand, new workers expected in Victoria(2024-2026)",
    job2_topOccupations: [
      {
        occupation: "Ageing and disability carers",
        numberInDemand: 17600,
      },
      {
        occupation: "General clerks",
        numberInDemand: 13700,
      },
      {
        occupation: "Registered nurses",
        numberInDemand: 10200,
      },
      {
        occupation: "Sales assistants (general)",
        numberInDemand: 7000,
      },
      {
        occupation: "Software and applications programmers",
        numberInDemand: 6400,
      },
      {
        occupation: "University lecturers and tutors",
        numberInDemand: 5700,
      },
      {
        occupation: "Storepersons",
        numberInDemand: 5400,
      },
      {
        occupation: "Primary school teachers",
        numberInDemand: 5300,
      },
      {
        occupation: "Management and organisation analysts",
        numberInDemand: 5000,
      },
      {
        occupation: "Secondary school teachers",
        numberInDemand: 4900,
      },
      {
        occupation: "Human resource managers",
        numberInDemand: 4600,
      },
      {
        occupation: "Accountants",
        numberInDemand: 4600,
      },
      {
        occupation: "Delivery drivers",
        numberInDemand: 4500,
      },
      {
        occupation: "Commercial cleaners",
        numberInDemand: 4400,
      },
      {
        occupation: "Nursing support and personal care workers",
        numberInDemand: 4200,
      },
      {
        occupation: "Kitchenhands",
        numberInDemand: 4000,
      },
      {
        occupation: "Waiters",
        numberInDemand: 4000,
      },
      {
        occupation: "Advertising, public relations and sales managers",
        numberInDemand: 4000,
      },
      {
        occupation: "Truck drivers",
        numberInDemand: 3700,
      },
      {
        occupation: "Receptionists",
        numberInDemand: 3600,
      },
    ],
    job3_title: "New workers expected in Victoria by industry(2024-2026)",
    job3_newWorkersByIndustry: [
      {
        industry: "Health and community services",
        higherOrderSkillsPercentage: 60.7,
        otherSkillsPercentage: 39.3,
        newWorkersExpected: 83300,
      },
      {
        industry: "Education and training",
        higherOrderSkillsPercentage: 82.9,
        otherSkillsPercentage: 17.1,
        newWorkersExpected: 46400,
      },
      {
        industry: "Professional, scientific and technical services",
        higherOrderSkillsPercentage: 93.5,
        otherSkillsPercentage: 6.5,
        newWorkersExpected: 35000,
      },
      {
        industry: "Accommodation and food services",
        higherOrderSkillsPercentage: 38.7,
        otherSkillsPercentage: 61.3,
        newWorkersExpected: 32300,
      },
      {
        industry: "Manufacturing",
        higherOrderSkillsPercentage: 63.5,
        otherSkillsPercentage: 36.5,
        newWorkersExpected: 24800,
      },
      {
        industry: "Transport, postal and warehousing",
        higherOrderSkillsPercentage: 29.4,
        otherSkillsPercentage: 70.6,
        newWorkersExpected: 22700,
      },
      {
        industry: "Public administration and safety",
        higherOrderSkillsPercentage: 65.0,
        otherSkillsPercentage: 35.0,
        newWorkersExpected: 18000,
      },
      {
        industry: "Construction",
        higherOrderSkillsPercentage: 75.5,
        otherSkillsPercentage: 24.5,
        newWorkersExpected: 17400,
      },
      {
        industry: "Retail trade",
        higherOrderSkillsPercentage: 39.1,
        otherSkillsPercentage: 60.9,
        newWorkersExpected: 11700,
      },
      {
        industry: "Financial and insurance services",
        higherOrderSkillsPercentage: 85.1,
        otherSkillsPercentage: 14.9,
        newWorkersExpected: 10500,
      },
      {
        industry: "Administrative and support services",
        higherOrderSkillsPercentage: 39.4,
        otherSkillsPercentage: 60.6,
        newWorkersExpected: 10000,
      },
      {
        industry: "Wholesale trade",
        higherOrderSkillsPercentage: 53.2,
        otherSkillsPercentage: 46.8,
        newWorkersExpected: 8300,
      },
      {
        industry: "Other services",
        higherOrderSkillsPercentage: 65.5,
        otherSkillsPercentage: 34.5,
        newWorkersExpected: 6500,
      },
      {
        industry: "Rental, hiring and real estate services",
        higherOrderSkillsPercentage: 78.9,
        otherSkillsPercentage: 21.1,
        newWorkersExpected: 5800,
      },
      {
        industry: "Arts and recreation services",
        higherOrderSkillsPercentage: 63.1,
        otherSkillsPercentage: 36.9,
        newWorkersExpected: 5700,
      },
      {
        industry: "Agriculture, forestry and fishing",
        higherOrderSkillsPercentage: 73.3,
        otherSkillsPercentage: 26.7,
        newWorkersExpected: 5600,
      },
      {
        industry: "Information media and telecommunications",
        higherOrderSkillsPercentage: 88.1,
        otherSkillsPercentage: 11.9,
        newWorkersExpected: 4000,
      },
      {
        industry: "Electricity, gas, water and waste services",
        higherOrderSkillsPercentage: 70.7,
        otherSkillsPercentage: 29.3,
        newWorkersExpected: 3600,
      },
      {
        industry: "Mining",
        higherOrderSkillsPercentage: 67.1,
        otherSkillsPercentage: 32.9,
        newWorkersExpected: 700,
      },
    ],
    job4_title: "Proportion of total employment by industry in Victoria",
    job4_proportionByIndustry: [
      {
        sector: "Household services",
        industry: "Health care and social assistance",
        percentage: 15.4,
      },
      {
        sector: "Household services",
        industry: "Education and training",
        percentage: 8.1,
      },
      {
        sector: "Household services",
        industry: "Accommodation and food services",
        percentage: 6.4,
      },
      {
        sector: "Household services",
        industry: "Other services",
        percentage: 3.6,
      },
      {
        sector: "Household services",
        industry: "Arts and recreation services",
        percentage: 2.0,
      },
      {
        sector: "Business services",
        industry: "Professional, scientific and technical services",
        percentage: 10.9,
      },
      {
        sector: "Business services",
        industry: "Financial and insurance services",
        percentage: 4.2,
      },
      {
        sector: "Business services",
        industry: "Administrative and support services",
        percentage: 2.6,
      },
      {
        sector: "Business services",
        industry: "Information media and telecommunications",
        percentage: 1.6,
      },
      {
        sector: "Business services",
        industry: "Rental, hiring and real estate services",
        percentage: 1.4,
      },
      {
        sector: "Goods production",
        industry: "Construction",
        percentage: 9.7,
      },
      {
        sector: "Goods production",
        industry: "Manufacturing",
        percentage: 7.9,
      },
      {
        sector: "Goods production",
        industry: "Agriculture, forestry and fishing",
        percentage: 2.2,
      },
      {
        sector: "Goods production",
        industry: "Electricity, gas, water and waste services",
        percentage: 1.2,
      },
      {
        sector: "Goods production",
        industry: "Mining",
        percentage: 0.3,
      },
      {
        sector: "Other",
        industry: "Public administration and safety",
        percentage: 5.0,
      },
    ],
    job5_title:
      "Occupations in demand that require higher-order skills in victoria, new workers expected(2024-2026)",
    job5_demandBySkill: [
      {
        industry: "Health care and social assistance",
        occupation: "Registered nurses",
        numberInDemand: 9900,
      },
      {
        industry: "Health care and social assistance",
        occupation: "Early childhood educators or child carers",
        numberInDemand: 2600,
      },
      {
        industry: "Health care and social assistance",
        occupation: "Welfare support workers",
        numberInDemand: 2600,
      },
      {
        industry: "Education and training",
        occupation: "University lecturers and tutors",
        numberInDemand: 5700,
      },
      {
        industry: "Education and training",
        occupation: "Primary school teachers",
        numberInDemand: 5100,
      },
      {
        industry: "Education and training",
        occupation: "Secondary school teachers",
        numberInDemand: 4800,
      },
      {
        industry: "Professional, scientific and technical services",
        occupation: "Software and applications programmers",
        numberInDemand: 4300,
      },
      {
        industry: "Professional, scientific and technical services",
        occupation: "Solicitors",
        numberInDemand: 2300,
      },
      {
        industry: "Professional, scientific and technical services",
        occupation: "Management and organisational analysts",
        numberInDemand: 2000,
      },
      {
        industry: "Accommodation and food services",
        occupation: "Chefs",
        numberInDemand: 3000,
      },
      {
        industry: "Accommodation and food services",
        occupation: "Cafe and restaurant managers",
        numberInDemand: 1700,
      },
      {
        industry: "Accommodation and food services",
        occupation: "Hotel and motel managers",
        numberInDemand: 1300,
      },
      {
        industry: "Manufacturing",
        occupation: "Production managers",
        numberInDemand: 1400,
      },
      {
        industry: "Manufacturing",
        occupation: "Manufacturers",
        numberInDemand: 900,
      },
      {
        industry: "Manufacturing",
        occupation: "Metal fitters and machinists",
        numberInDemand: 900,
      },
      {
        industry: "Transport, postal and warehousing",
        occupation: "Travel attendants",
        numberInDemand: 600,
      },
      {
        industry: "Transport, postal and warehousing",
        occupation: "Supply, distribution and procurement managers",
        numberInDemand: 500,
      },
      {
        industry: "Transport, postal and warehousing",
        occupation: "Air transport professionals",
        numberInDemand: 500,
      },
      {
        industry: "Public administration and safety",
        occupation: "Police",
        numberInDemand: 1200,
      },
      {
        industry: "Public administration and safety",
        occupation: "Intelligence and policy analysts",
        numberInDemand: 800,
      },
      {
        industry: "Public administration and safety",
        occupation: "Other information and organisation professionals",
        numberInDemand: 500,
      },
      {
        industry: "Construction",
        occupation: "Construction managers",
        numberInDemand: 2400,
      },
      {
        industry: "Construction",
        occupation: "Electricians",
        numberInDemand: 1400,
      },
      {
        industry: "Construction",
        occupation: "Plumbers",
        numberInDemand: 1200,
      },
      {
        industry: "Retail trade",
        occupation: "Retail managers",
        numberInDemand: 1000,
      },
      {
        industry: "Retail trade",
        occupation: "Pharmacists",
        numberInDemand: 500,
      },
      {
        industry: "Retail trade",
        occupation: "Advertising, public relations and sales managers",
        numberInDemand: 300,
      },
      {
        industry: "Financial and insurance services",
        occupation: "Management and organisation analysts",
        numberInDemand: 800,
      },
      {
        industry: "Financial and insurance services",
        occupation: "Financial investment advisers and managers",
        numberInDemand: 800,
      },
      {
        industry: "Financial and insurance services",
        occupation: "Software and applications programmers",
        numberInDemand: 500,
      },
    ],
    job6_title:
      "Full-time and part-time employment trends in Victoria(2018-2023)",
    job6_fullAndPart: [
      {
        year: 2018,
        fullTime: 100.0,
        partTime: 100.0,
      },
      {
        year: 2019,
        fullTime: 104.6,
        partTime: 101.6,
      },
      {
        year: 2020,
        fullTime: 105.0,
        partTime: 105.2,
      },
      {
        year: 2021,
        fullTime: 104.6,
        partTime: 103.2,
      },
      {
        year: 2022,
        fullTime: 109.0,
        partTime: 104.4,
      },
      {
        year: 2023,
        fullTime: 114.9,
        partTime: 103.5,
      },
    ],
    job7_title: "Change in employment by industry in Victoria(2013-2023)",
    job7_changeByIndustry: [
      {
        industry: "Health care and social assistance",
        victoriaChange: 211500,
        victoriaPercentage: 60.3,
        australiaChange: 784000,
        australiaPercentage: 57.2,
      },
      {
        industry: "Professional, scientific and technical services",
        victoriaChange: 153700,
        victoriaPercentage: 62.8,
        australiaChange: 420700,
        australiaPercentage: 46.3,
      },
      {
        industry: "Construction",
        victoriaChange: 117800,
        victoriaPercentage: 49.6,
        australiaChange: 344600,
        australiaPercentage: 35.2,
      },
      {
        industry: "Education and training",
        victoriaChange: 61200,
        victoriaPercentage: 26.1,
        australiaChange: 276800,
        australiaPercentage: 30.8,
      },
      {
        industry: "Retail trade",
        victoriaChange: 56700,
        victoriaPercentage: 18.8,
        australiaChange: 65500,
        australiaPercentage: 5.3,
      },
      {
        industry: "Transport, postal and warehousing",
        victoriaChange: 41700,
        victoriaPercentage: 29.0,
        australiaChange: 129800,
        australiaPercentage: 22.1,
      },
      {
        industry: "Accommodation and food services",
        victoriaChange: 41500,
        victoriaPercentage: 21.7,
        australiaChange: 150700,
        australiaPercentage: 18.9,
      },
      {
        industry: "Public administration and safety",
        victoriaChange: 38200,
        victoriaPercentage: 26.4,
        australiaChange: 180300,
        australiaPercentage: 24.6,
      },
      {
        industry: "Financial and insurance services",
        victoriaChange: 32600,
        victoriaPercentage: 27.0,
        australiaChange: 121600,
        australiaPercentage: 29.0,
      },
      {
        industry: "Other services",
        victoriaChange: 23000,
        victoriaPercentage: 21.5,
        australiaChange: 72900,
        australiaPercentage: 16.1,
      },
      {
        industry: "Electricity, gas, water and waste services",
        victoriaChange: 9900,
        victoriaPercentage: 28.9,
        australiaChange: 7600,
        australiaPercentage: 5.2,
      },
      {
        industry: "Agriculture, forestry and fishing",
        victoriaChange: 9400,
        victoriaPercentage: 13.0,
        australiaChange: 10500,
        australiaPercentage: 3.6,
      },
      {
        industry: "Arts and recreation services",
        victoriaChange: 4600,
        victoriaPercentage: 6.8,
        australiaChange: 25700,
        australiaPercentage: 11.5,
      },
      {
        industry: "Rental, hiring and real estate services",
        victoriaChange: 4400,
        victoriaPercentage: 9.4,
        australiaChange: 20100,
        australiaPercentage: 10.5,
      },
      {
        industry: "Manufacturing",
        victoriaChange: 400,
        victoriaPercentage: 0.2,
        australiaChange: -3400,
        australiaPercentage: -0.4,
      },
      {
        industry: "Information media and telecommunications",
        victoriaChange: -500,
        victoriaPercentage: -0.8,
        australiaChange: -24700,
        australiaPercentage: -11.5,
      },
      {
        industry: "Administrative and support services",
        victoriaChange: -4400,
        victoriaPercentage: -4.5,
        australiaChange: 10800,
        australiaPercentage: 2.8,
      },
      {
        industry: "Mining",
        victoriaChange: -8100,
        victoriaPercentage: -44.3,
        australiaChange: 47200,
        australiaPercentage: 18.2,
      },
      {
        industry: "Wholesale trade",
        victoriaChange: -23700,
        victoriaPercentage: -19.6,
        australiaChange: -47600,
        australiaPercentage: -11.1,
      },
    ],
    job8_title: "New workers expected in Victoria by skill level(2024-2026)",
    job8_newWorkersBySkill: [
      {
        skillLevel: "Skill level 1",
        newWorkers: 159200,
        skillCategory: "Higher-order skills",
      },
      {
        skillLevel: "Skill level 2",
        newWorkers: 36300,
        skillCategory: "Higher-order skills",
      },
      {
        skillLevel: "Skill level 3",
        newWorkers: 30900,
        skillCategory: "Higher-order skills",
      },
      {
        skillLevel: "Skill level 4",
        newWorkers: 91000,
        skillCategory: "Other skills",
      },
      {
        skillLevel: "Skill level 5",
        newWorkers: 34800,
        skillCategory: "Other skills",
      },
    ],
    job9_title: "New workers expected across regional Victoria(2024-2026)",
    job9_newWorkersByRegion: [
      {
        region: "Mallee",
        newWorkersExpected: 3500,
      },
      {
        region: "Wimmera Southern Mallee",
        newWorkersExpected: 1500,
      },
      {
        region: "Great South Coast",
        newWorkersExpected: 4000,
      },
      {
        region: "Central Highlands",
        newWorkersExpected: 9600,
      },
      {
        region: "Loddon Campaspe",
        newWorkersExpected: 10700,
      },
      {
        region: "Barwon",
        newWorkersExpected: 19700,
      },
      {
        region: "Goulburn",
        newWorkersExpected: 7600,
      },
      {
        region: "Ovens Murray",
        newWorkersExpected: 7000,
      },
      {
        region: "Gippsland",
        newWorkersExpected: 11700,
      },
    ],
    job10_title: "New workers expected by industry(2024-2026)",
    job10_newWorkersByIndustry: [
      {
        occupation: "Health care and social assistance",
        numberInDemand: 22600,
      },
      {
        occupation: "Accommodation and food services",
        numberInDemand: 8900,
      },
      {
        occupation: "Education and training",
        numberInDemand: 7100,
      },
      {
        occupation: "Manufacturing",
        numberInDemand: 5400,
      },
      {
        occupation: "Agriculture, forestry and fishing",
        numberInDemand: 4100,
      },
      {
        occupation: "Public administration and safety",
        numberInDemand: 4100,
      },
      {
        occupation: "Construction",
        numberInDemand: 4000,
      },
      {
        occupation: "Transport, postal and warehousing",
        numberInDemand: 3500,
      },
      {
        occupation: "Professional, scientific and technical services",
        numberInDemand: 3400,
      },
      {
        occupation: "Retail trade",
        numberInDemand: 2500,
      },
      {
        occupation: "Administrative and support services",
        numberInDemand: 2400,
      },
      {
        occupation: "Other services",
        numberInDemand: 1600,
      },
      {
        occupation: "Wholesale trade",
        numberInDemand: 1500,
      },
      {
        occupation: "Rental, hiring and real estate services",
        numberInDemand: 1100,
      },
      {
        occupation: "Electricity, gas, water and waste services",
        numberInDemand: 900,
      },
      {
        occupation: "Arts and recreation services",
        numberInDemand: 900,
      },
      {
        occupation: "Financial and insurance services",
        numberInDemand: 800,
      },
      {
        occupation: "Information media and telecommunications",
        numberInDemand: 400,
      },
      {
        occupation: "Mining",
        numberInDemand: 300,
      },
    ],
  };
  return (
    <div className="relative p-4">
      <div className="max-w-5xl ">
        <div className="mt-3 flex flex-col justify-between rounded-b  leading-normal lg:rounded-b-none lg:rounded-r">
          <div className="">
            <a
              href="#"
              className="text-sm text-indigo-600 transition duration-500 ease-in-out hover:text-gray-700"
            >
              Election
            </a>
            <h1 className="text-4xl font-bold text-gray-900">
              Understanding Workforce Trends: Unveiling Victoria's Participation
              and Unemployment Rates
            </h1>
            <div className="font-regular flex py-5 text-sm text-gray-900">
              <span className="mr-3 flex flex-row items-center">
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="13px"
                  width="13px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                      ></path>
                    </g>
                  </g>
                </svg>
                <span className="ml-1 text-indigo-400">6 minute read</span>
              </span>
            </div>
            <hr className="bg-red-200 text-red-300" />
            <p className="my-5 text-base leading-8">
              Dive into the heartbeat of Victoria's workforce with our
              insightful graph showcasing participation and unemployment rates
              spanning from 2013 to 2023. Witness the fluctuations, the
              triumphs, and the resilience of our job market as we navigate
              through a decade of economic dynamics. From peaks of prosperity to
              valleys of challenges, this graph paints a vivid picture of
              Victoria's employment landscape, empowering you to make informed
              decisions about your career journey.
            </p>
            <div className="h-96 w-128">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data.job1_participationRate}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name">
                    <Label
                      className="text-black"
                      value="Figure 1: Participation and unemployment rates Victoria(2013-2023)"
                      offset={0}
                      position="insideBottom"
                    />
                  </XAxis>
                  <YAxis yAxisId="left" domain={["auto", "auto"]} />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={["auto", "auto"]}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="participationRate"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="unemploymentRate"
                    stroke="#82ca9d"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <h3 className="my-5 text-2xl font-bold">
              Industry Evolution: Exploring Employment Shifts Across Victoria
            </h3>
            <p className="my-5 text-base leading-8">
              Take a journey through the evolution of Victoria's industries with
              our revealing graph showcasing changes in employment from 2013 to
              2023. Witness the rise of new sectors, the transformation of
              traditional industries, and the dynamic shifts that shape our
              economic landscape. With insights into employment trends across
              various sectors, you'll gain a deeper understanding of where your
              skills and aspirations can thrive in Victoria's diverse job
              market.
            </p>
            <div className="h-96 w-2/3">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={500}
                  data={data.job7_changeByIndustry}
                  layout={"vertical"}
                  margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey="victoriaChange">
                    <Label
                      value="Figure 2: (change in employment by industry in Victoria (2013-2023))"
                      offset={-3}
                      position="insideBottom"
                    />
                  </XAxis>
                  <YAxis
                    dataKey="industry"
                    type="category"
                    textAnchor="end"
                    width={200}
                    interval={0}
                    tickFormatter={tickFormatter}
                  />
                  <Tooltip
                    formatter={(value) => `${value.toString()} formatted value`}
                  />
                  <Legend />
                  <Bar dataKey="victoriaChange" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <h3 className="my-5 text-2xl font-bold">
              Forecasting Future Careers: Spotlight on Victoria's Top 20
              Occupations
            </h3>
            <p className="my-5 text-base leading-8">
              Get ahead of the curve and explore the hottest job prospects in
              Victoria from 2024 to 2026. Our graph unveils the top 20
              occupations set to dominate the job market, guiding you towards
              exciting career opportunities. Whether you're a tech enthusiast, a
              healthcare hero, or a creative genius, discover where your talents
              align with the growing demands of Victoria's workforce.
            </p>
            <BarChart
              width={800}
              height={500}
              data={data.job2_topOccupations}
              layout={"vertical"}
              margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="numberInDemand">
                <Label
                  value="Figure 3: (top 20 occupations in demand, new workers expected in Victoria (2024-2026))
"
                  offset={-3}
                  position="insideBottom"
                />
              </XAxis>
              <YAxis
                allowDataOverflow
                width={200}
                dataKey="occupation"
                type="category"
                textAnchor="end"
                interval={0}
                tick={{ fontSize: 12 }}
                tickFormatter={tickFormatter}
              />
              <Tooltip
                formatter={(value) => `${value.toString()} formatted value`}
              />
              <Legend />
              <Bar dataKey="numberInDemand" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsInfo;
