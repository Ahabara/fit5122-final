import China from "../../assets/countries/china.webp";
import India from "../../assets/countries/india.webp";
import England from "../../assets/countries/england.webp";
import NewZealand from "../../assets/countries/new_zealand.webp";
import Italy from "../../assets/countries/italy.webp";
import Vietnam from "../../assets/countries/Vietnam.webp";
import Modal from "./Modal.tsx";

const ExploreCultures = () => {
  const countryIntros = {
    china:
      "Discover the rich cultural tapestry of China and its growing migrant community in Australia.",
    england:
      "explore the historic ties between England and Australia, and the migration pathways connecting the two nations.",
    india:
      "Learn about the vibrant Indian diaspora in Australia and the shared cultural exchanges between the two countries.",
    italy:
      "Uncover the flavors of Italy and the stories of Italian migrants who've made Australia their home.",
    "new zealand":
      "Delve into the close ties between New Zealand and Australia, and the seamless migration opportunities for Kiwis.",
    vietnam:
      "Experience the cultural fusion of Vietnam and Australia, and the journey of Vietnamese migrants shaping their lives down under.",
  };

  const countrySubtitles = {
    china: "Land of ancient wonders",
    england: "Home of British heritage",
    india: "Nation of diverse cultures",
    italy: "Birthplace of Renaissance art",
    "new zealand": "Land of the long white cloud",
    vietnam: "Land of breathtaking landscapes",
  };

  return (
    <section className="bg-myBlack py-8 pl-6 lg:px-12" id="Countries">
      <p className=" max-w-lg  text-6xl text-amber-50">
        Explore Australia's Rich &
        <span className="bg-myPurple px-2">Diverse</span> Communities
      </p>
      <section className="mx-auto mb-5 mt-10 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        <Modal
          image={England}
          name={"England"}
          brief={countryIntros.england}
          subtitle={countrySubtitles.england}
        />
        <Modal
          image={NewZealand}
          name={"New Zealand"}
          brief={countryIntros["new zealand"]}
          subtitle={countrySubtitles["new zealand"]}
        />
        <Modal
          image={China}
          name={"China"}
          brief={countryIntros.china}
          subtitle={countrySubtitles.china}
        />
        <Modal
          image={India}
          name={"India"}
          brief={countryIntros.india}
          subtitle={countrySubtitles.india}
        />
        <Modal
          image={Italy}
          name={"Italy"}
          brief={countryIntros.italy}
          subtitle={countrySubtitles.italy}
        />
        <Modal
          image={Vietnam}
          name={"Vietnam"}
          brief={countryIntros.vietnam}
          subtitle={countrySubtitles.vietnam}
        />
      </section>
    </section>
  );
};

export default ExploreCultures;
