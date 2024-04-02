import Layout from "../landing/Layout.tsx";
import {Link, useParams} from "react-router-dom";
import {DoAndDont} from "./DoAndDont.tsx";
import {MostSpokenLanguages} from "./MostSpokenLanguages.tsx";
import {Greetings} from "./Greetings.tsx";
import {Cuisine} from "./Cuisine.tsx";
import {SourcesList} from "./SourcesList.tsx";
import {TraditionalClothing} from "./TraditionalClothing.tsx";
import {CountryHero} from "./CountryHero.tsx";
import {SignificantEvents} from "./SignificantEvents.tsx";


const Country = () => {
    const china = {
        "China": {
            "About": "China, situated in East Asia, is a vast and influential nation characterized by its ancient history, diverse culture, and rapid modernization. With a population surpassing 1.4 billion, it is the world's most populous country. China's rich heritage includes landmarks like the Great Wall and the Forbidden City, reflecting its millennia-old civilization. Known for its economic prowess, technological innovation, and culinary delights, China continues to captivate the world with its blend of tradition and progress.",
            "Significant Festivals": [
                {
                    "name": "Chinese New Year (Spring Festival)",
                    "Description": "This joyous occasion marks the beginning of the lunar new year with vibrant festivities, family reunions, and spectacular fireworks displays.",
                    "Image URL": "https://plus.unsplash.com/premium_photo-1663039823206-af759b22bab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbmVzZSUyMG5ldyUyMHllYXJ8ZW58MHx8MHx8fDA%3D"
                },
                {
                    "name": "Mid-Autumn Festival (Moon Festival)",
                    "Description": "Celebrated on the 15th day of the 8th lunar month, it honors the harvest and the full moon with mooncakes, lanterns, and family gatherings.",
                    "Image URL": "https://images.unsplash.com/photo-1607780095014-edceb79f6c52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwbGFudGVybnN8ZW58MHx8MHx8fDA%3D"
                },
                {
                    "name": "Dragon Boat Festival",
                    "Description": "Held on the 5th day of the 5th lunar month, it commemorates the legendary poet Qu Yuan with dragon boat races and the consumption of zongzi.",
                    "Image URL": "https://images.unsplash.com/photo-1529547078401-761086c0a19b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHJhZ29uJTIwQm9hdCUyMEZlc3RpdmFsfGVufDB8fDB8fHww"
                },
                {
                    "name": "Qingming Festival (Tomb-Sweeping Day)",
                    "Description": "A time for families to honor their ancestors by visiting graves, cleaning tombstones, and making offerings of food and incense.",
                    "Image URL": "https://images.unsplash.com/photo-1680450686996-78c474248454?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9tYiUyMFN3ZWVwaW5nJTIwRGF5fGVufDB8fDB8fHww"
                }
            ],
            "Languages Spoken in Victoria": {
                "Top 5": ["Mandarin", "Cantonese", "English", "Chinese", "Wu"]
            },
            "Traditional Clothing": "Traditional clothing in China reflects the rich cultural heritage and diversity of the country. One of the most iconic garments is the qipao (cheongsam) for women, characterized by its form-fitting silhouette and high collar. For men, the traditional attire includes the changshan (also known as the Mandarin gown) or the zhongshan suit, often worn with a traditional cap known as the gwanmo.",
            "Greetings": {
                "Common Greetings": {
                    "Nǐ hǎo": "Hello or How are you?",
                    "Nǐ chīle ma?": "Have you eaten?",
                    "Zǎo shàng hǎo": "Good morning",
                    "Wǎn shàng hǎo": "Good evening"
                }
            },
            "Cuisines": "Chinese cuisine is renowned worldwide for its diversity, flavors, and rich culinary heritage. With a history spanning thousands of years, Chinese cooking techniques vary greatly across regions, including Sichuan, Cantonese, Hunan, and more. Staple ingredients such as rice, noodles, soy sauce, and a plethora of fresh vegetables are common in Chinese dishes. From savory stir-fries to delicate dim sum, spicy hot pots to succulent Peking duck, Chinese cuisine offers a tantalizing array of flavors, textures, and aromas that delight the senses and captivate food lovers globally.",
            "Image URLs": [
                "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww",
                "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fHww"
            ],
            "DosAndDonts": {
                "Dos": [
                    "Give and receive everything with 2 hands",
                    "Show proper respect to elders and slightly bow.",
                    "Guests are expected to refrain from loud actions.",
                    "Be punctual"
                ],
                "Donts": [
                    "Slurping food and talking while eating",
                    "When receiving gift, do not open them unless they insist.",
                    "Disrespect elders",
                    "Be late or unprofessional"
                ]
            },
            "Sources of Information": [
                "Community Information Summary Historical Background 2016 Census China-born. (n.d.). Available at: https://www.homeaffairs.gov.au/mca/files/2016-cis-china.PDF.",
                "Wikipedia Contributors (2018). China. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/China.",
                "Wikipedia Contributors (2019). Chinese cuisine. [online] Wikipedia. Available at: https://en.wikipedia.org/wiki/Chinese_cuisine.",
                "www.abs.gov.au. (n.d.). 2021 People in Victoria who were born in China (excludes SARs and Taiwan), Census Country of birth QuickStats | Australian Bureau of Statistics. [online] Available at: https://www.abs.gov.au/census/find-census-data/quickstats/2021/6101_2.",
                "www.vic.gov.au. (2024). Chinese community profile. [online] Available at: https://www.vic.gov.au/chinese-community-profile."
            ]
        }
    }
    const {countryName} = useParams();
    return (
        <Layout>
            <section className="text-gray-600 body-font" id="pageTop">
                <div className="container px-5 py-24 mx-auto">
                    <CountryHero about={china["China"]["About"]} countryName={countryName}/>
                    <SignificantEvents events={china.China["Significant Festivals"]}/>
                    <p className="pb-8">In Victoria, people from {countryName} speak a number of languages. The most
                        common ones are: </p>
                    <MostSpokenLanguages languages={china.China["Languages Spoken in Victoria"]["Top 5"]}/>
                    <Greetings greetings={china.China.Greetings["Common Greetings"]}/>
                    <Cuisine description={china.China.Cuisines} images={china.China["Image URLs"]}/>
                    <TraditionalClothing description={china.China["Traditional Clothing"]}/>
                    <DoAndDont DosAndDonts={china.China["DosAndDonts"]}/>
                    <SourcesList sources={china.China["Sources of Information"]}/>

                    <div className="my-4 py-8 pl-4" >
                        <Link to="/" className="relative px-6 py-3 font-bold text-black group">
                            <span
                                className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-myPurple group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                            <span className="relative">
                                Go Back</span>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default Country;