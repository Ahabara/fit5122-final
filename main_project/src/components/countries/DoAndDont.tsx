import React from "react";
import yesAndNo from "./assets/customer-satisfaction.png";
import yes from "./assets/yes.png";
import no from "./assets/no.png";
interface DoAndDontProps {
    "DosAndDonts" : { Dos: string[]; Donts: string[]; }
}
function mergeDosAndDonts(Dos:string[], Donts:string[]) {
    const mergedArray: string[] = [];
    let dosIndex = 0;
    let dontsIndex = 0;

    while (dosIndex < Dos.length && dontsIndex < Donts.length) {
        mergedArray.push(Dos[dosIndex]);
        mergedArray.push(Donts[dontsIndex]);
        dosIndex++;
        dontsIndex++;
    }

    while (dosIndex < Dos.length) {
        mergedArray.push(Dos[dosIndex]);
        dosIndex++;
    }

    while (dontsIndex < Donts.length) {
        mergedArray.push(Donts[dontsIndex]);
        dontsIndex++;
    }

    return mergedArray;
}

export const DoAndDont: React.FC<DoAndDontProps> = ({DosAndDonts}) => {

    const merged = mergeDosAndDonts(DosAndDonts.Dos, DosAndDonts.Donts)

    return <>
        <section className="text-gray-600 body-font">
            <div className="container py-8 mx-auto">
                <div className="flex items-center py-8">
                    <img src={yesAndNo} alt="Description of image" className=" h-12 mr-2"/>
                    <p className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Do's And Dont's</p>
                </div>

                <p className="text-base mb-4 leading-relaxed xl:w-2/4 lg:w-3/4 ">
                    In every culture, there are intricacies to behavior that can greatly impact interactions.
                    Understanding the dos and don'ts of a culture is essential for respectful engagement.</p>

                <div className="flex flex-wrap lg:w-4/5 sm:mb-2 -mx-2">
                    {merged.map((i, k) => (
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                {k % 2 == 0 ?
                                    <img
                                        src={yes}
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    /> : <img
                                        src={no}
                                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    />}
                                <span className="title-font font-medium">{i}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    </>
}