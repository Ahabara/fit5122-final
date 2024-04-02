import React from "react";
import {Link} from "react-router-dom";
import CountryCard from './CountryCard.tsx';


interface CountryCardModal {
    image: string
    name: string
    brief: string
    subtitle: string
}
const Modal:React.FC<CountryCardModal> = ({image, name, brief, subtitle}) => {

    return (
        <>
            <div className="" onClick={() => (document.getElementById(name) as HTMLFormElement).showModal()}>
                <CountryCard subtitle={subtitle} name={name} image={image}/>
            </div>
            <dialog id={name} className="modal w-auto">
                {/*col-auto*/}
                <div className="modal-box p-0 bg-transparent w-auto max-h-full ">
                    <div
                        className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>
                        <div
                            className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
                            <div className="flex items-center justify-center mx-auto">
                                <img className="h-96 w-96 object-cover rounded-lg "
                                     src={image}
                                     alt=""/>
                            </div>

                            <div className="mt-5 text-center">
                                <h3 className="text-lg text-left font-medium text-gray-800 dark:text-white" id="modal-title">
                                    {name}
                                </h3>

                                <p className="mt-2 text-gray-500 text-left dark:text-gray-400">
                                    {brief}
                                </p>
                            </div>
                            <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                <Link
                                    to={`/country/${name}#pageTop`}
                                    className="px-4 sm:mx-2 w-full py-2.5 mt-3 sm:mt-0 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};


export default Modal;
