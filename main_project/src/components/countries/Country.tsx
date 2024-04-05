import Layout from "../landing/Layout.tsx";
import { Link, useParams } from "react-router-dom";
import { DoAndDont } from "./DoAndDont.tsx";
import { MostSpokenLanguages } from "./MostSpokenLanguages.tsx";
import { Greetings } from "./Greetings.tsx";
import { Cuisine } from "./Cuisine.tsx";
import SourcesList from "./SourcesList.tsx";
import { TraditionalClothing } from "./TraditionalClothing.tsx";
import { CountryHero } from "./CountryHero.tsx";
import { SignificantEvents } from "./SignificantEvents.tsx";
import { useEffect, useState } from "react";
import Loading from "../Loading.tsx";
import CountryStats from "./CountryStats.tsx";

const Country = () => {
  const { countryName } = useParams();
  const url = `https://fourtitude.xyz/resource?country=${countryName}`;

  const [data, setData] = useState<ResourceData | null>(null);
  const [error, setError] = useState(false);
  interface DemographicInfo {
    group: string;
    subGroup: string;
    populationNumber: number;
    populationPercentage: number;
  }

  interface Greeting {
    greeting: string;
    meaning: string;
  }

  interface CulturalEtiquette {
    can: string;
    cannot: string;
  }

  interface FestivalInfo {
    festival: string;
    date: string;
    significance: string;
    imageUrl: string;
  }

  interface ResourceData {
    country: string;
    about: string;
    demographicInfos: DemographicInfo[];
    traditionalClothing: string;
    greetings: Greeting[];
    cuisinesInfo: string;
    cuisineImages: string[];
    caveatInfo: string;
    culturalEtiquettes: CulturalEtiquette[];
    festivalInfos: FestivalInfo[];
    languageInfos: string[];
    referenceInfos: {
      author: string;
      date: string;
      link: string;
      title: string;
    }[];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(true);
          return;
        }
        const result = await response.json();
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  if (error) {
    // todo error page
    return <p>Error</p>;
  }

  if (!data) {
    return <Loading />;
  }

  console.log("data ", data);

  return (
    <Layout>
      <section className="body-font text-gray-600" id="pageTop">
        <div className="container mx-auto px-5 py-24">
          <CountryHero about={data.about} countryName={data.country} />
          <SignificantEvents events={data.festivalInfos} />
          <p className="pb-8">
            In Victoria, people from {countryName} speak a number of languages.
            The most common ones are:{" "}
          </p>
          {/*TODO array == 1, change text of languages */}
          <MostSpokenLanguages languages={data.languageInfos} />
          <CountryStats data={data.demographicInfos} />
          <Greetings greeting={data.greetings} />
          <Cuisine
            description={data.cuisinesInfo}
            images={data.cuisineImages}
          />
          <TraditionalClothing description={data.traditionalClothing} />
          <DoAndDont etiquette={data.culturalEtiquettes} />
          <SourcesList sources={data.referenceInfos} />
          <div className="my-4 py-8 pl-4">
            <Link
              to="/"
              className="group relative px-6 py-3 font-bold text-black"
            >
              <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-myPurple transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
              <span className="relative">Go Back</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Country;
