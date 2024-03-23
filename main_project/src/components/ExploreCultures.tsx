import CountryCard from "./CountryCard.tsx";
import China from "../assets/countries/china.jpg"
import India from "../assets/countries/india.jpg"
import England from "../assets/countries/england.jpg"
import NewZealand from "../assets/countries/new_zealand.webp"
import Philippines from "../assets/countries/philippines.jpg"
import Vietnam from "../assets/countries/Vietnam.jpg"
const ExploreCultures = () => {
    return (
        <section className="bg-myBlack mx-auto pl-6 lg:px-12 py-8">
            <p className="text-6xl text-amber-50 max-w-lg">Explore Australia's Rich & <span
                className="bg-myPurple px-2">Diverse</span> Communities</p>
            <section id="Countries"
                     className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <CountryCard image={England} name={"England"}/>
                <CountryCard image={NewZealand} name={"New Zealand"}/>
                <CountryCard image={China} name={"China"}/>
                <CountryCard image={India} name={"India"}/>
                <CountryCard image={Philippines} name={"Philippines"}/>
                <CountryCard image={Vietnam} name={"Vietnam"}/>
            {/*   TODO  Nepal, Philippines, Vietnam, Cambodia, Colombia*/}
            </section>
        </section>
    );
};

export default ExploreCultures;