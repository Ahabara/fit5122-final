import React from "react";
import food from "./assets/food.png";

interface CuisineProps {
    description: string,
    images?: string[]
}

export const Cuisine: React.FC<CuisineProps> = ({description, images}) => {
    return <>
        <div className="flex items-center py-8">
            <img src={food} alt="Description of image" className=" h-12 mr-2"/>
            <p className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Cuisine</p>
        </div>
        <p className="text-base mb-4 leading-relaxed xl:w-3/4 lg:w-3/4">{description}</p>
        <section className="text-gray-600 body-font">
            <div className="container py-8 mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block"
                                 src={images![2]}/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block"
                                 src={images![1]}/>
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block"
                                 src={images![0]}/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block"
                                 src={images![0]}/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block"
                                 src={images![0]}/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block"
                                 src={images![0]}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}