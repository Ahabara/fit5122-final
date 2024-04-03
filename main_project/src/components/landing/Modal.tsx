import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard.tsx";

interface CountryCardModal {
  image: string;
  name: string;
  brief: string;
  subtitle: string;
}
const Modal: React.FC<CountryCardModal> = ({
  image,
  name,
  brief,
  subtitle,
}) => {
  return (
    <>
      <div
        className=""
        onClick={() =>
          (document.getElementById(name) as HTMLFormElement).showModal()
        }
      >
        <CountryCard subtitle={subtitle} name={name} image={image} />
      </div>
      <dialog id={name} className="modal w-auto">
        {/*col-auto*/}
        <div className="modal-box max-h-full w-auto bg-transparent p-0 ">
          <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="relative inline-block transform overflow-hidden rounded-xl bg-white p-4 text-left align-middle shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 dark:bg-gray-900">
              <div className="mx-auto flex items-center justify-center">
                <img
                  className="h-96 w-96 rounded-lg object-cover "
                  src={image}
                  alt=""
                />
              </div>
              <div className="mt-5 text-center">
                <h3
                  className="text-left text-lg font-medium text-gray-800 dark:text-white"
                  id="modal-title"
                >
                  {name}
                </h3>

                <p className="mt-2 text-left text-gray-500 dark:text-gray-400">
                  {brief}
                </p>
              </div>
              <div className="mt-4 sm:-mx-2 sm:mt-6 sm:flex sm:items-center sm:justify-between">
                <Link
                  to={`/country/${name}#pageTop`}
                  className="mt-3 w-full transform rounded-md bg-blue-600 px-4 py-2.5 text-center text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0"
                >
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
