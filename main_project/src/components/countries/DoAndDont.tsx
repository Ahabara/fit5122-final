import React from "react";
import yesAndNo from "./assets/customer-satisfaction.png";
import yes from "./assets/yes.png";
import no from "./assets/no.png";

interface CulturalEtiquette {
  can: string;
  cannot: string;
}
interface DoAndDontProps {
  etiquette: CulturalEtiquette[];
}

export const DoAndDont: React.FC<DoAndDontProps> = ({ etiquette }) => {
  const flattenedArray: string[] = [];

  for (let i = 0; i < etiquette.length; i++) {
    flattenedArray.push(etiquette[i].can, etiquette[i].cannot);
  }

  function viewLog() {
    alert(flattenedArray);
  }

  return (
    <>
      <section onClick={viewLog} className="body-font text-gray-600">
        <div className="container mx-auto py-8">
          <div className="flex items-center py-8">
            <img
              src={yesAndNo}
              alt="Description of image"
              className=" mr-2 h-12"
            />
            <p className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
              Do's And Dont's
            </p>
          </div>

          <p className="mb-4 text-base leading-relaxed lg:w-3/4 xl:w-2/4 ">
            In every culture, there are intricacies to behavior that can greatly
            impact interactions. Understanding the dos and don'ts of a culture
            is essential for respectful engagement.
          </p>
          <div className="-mx-2 flex flex-wrap sm:mb-2 lg:w-4/5">
            {flattenedArray.map((i, k) => (
              <div className="w-full p-2 sm:w-1/2" key={k}>
                <div className="flex h-full items-center rounded bg-gray-100 p-4">
                  {k % 2 == 0 ? (
                    <img
                      src={yes}
                      className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-500"
                      alt="yes tick"
                    />
                  ) : (
                    <img
                      src={no}
                      className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-500"
                      alt="no icon"
                    />
                  )}
                  <span className="title-font font-medium">{i.toString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
