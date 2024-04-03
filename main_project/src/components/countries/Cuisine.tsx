import React from "react";
import food from "./assets/food.png";

interface CuisineProps {
  description: string;
  images?: string[];
}

export const Cuisine: React.FC<CuisineProps> = ({ description, images }) => {
  return (
    <>
      <div className="flex items-center py-8">
        <img src={food} alt="Description of image" className=" mr-2 h-12" />
        <p className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
          Cuisine
        </p>
      </div>
      <p className="mb-4 text-base leading-relaxed lg:w-3/4 xl:w-3/4">
        {description}
      </p>
      <section className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap py-8">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={images![2]}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={images![1]}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={images![0]}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={images![3]}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={images![4]}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src={images![5]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
