import React from "react";

interface FestivalCardProps {
  month: string;
  day: number;
  name: string;
  type: string;
  description: string;
}

const FestivalCard: React.FC<FestivalCardProps> = ({
  month,
  day,
  name,
  type,
  description,
}) => (
  <div className="flex p-1 shadow">
    <div className="mr-6 pt-1 text-center">
      <div className="mb-1 border-b border-gray-400 px-2 pb-1">
        <p className="text-blue-gray-700 text-sm">{month}</p>
      </div>
      <div className="px-2">
        <p className="text-lg font-bold">{day}</p>
      </div>
    </div>
    <div>
      <div className="mb-2">
        <a
          href="/"
          className="text-deep-purple-accent-400 hover:text-deep-purple-800 text-xs font-semibold uppercase tracking-wide transition-colors duration-200"
          aria-label="Category"
          title="Delevopment"
        >
          {type}
        </a>
      </div>
      <div className="mb-2">
        <a
          href="/"
          aria-label="Article"
          className="hover:text-deep-purple-accent-400 inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200"
        >
          {name}
        </a>
      </div>
      <p className="mb-5 text-gray-700">{description}</p>
      <form>
        <div className="m-1.5 flex flex-col overflow-hidden   focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 lg:flex-row dark:border-gray-600 dark:focus-within:border-blue-300">
          {/*<input*/}
          {/*  className="bg-pink-100 p-2 text-gray-700 placeholder-gray-500 outline-none focus:placeholder-transparent "*/}
          {/*  type="text"*/}
          {/*  name="email"*/}
          {/*  placeholder="Enter your email"*/}
          {/*  aria-label="Enter your email"*/}
          {/*/>*/}
          <button className="transform rounded-sm bg-gray-700 px-4 py-3 text-sm font-medium uppercase tracking-wider text-gray-100 transition-colors duration-300 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
);

export const Festivals = () => {
  return (
    <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      <div className="grid gap-x-8 gap-y-12 sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
        <FestivalCard
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
          }
          name={"Carnivale"}
          month={"Jul"}
          day={18}
          type={"Italian"}
        />
        <FestivalCard
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
          }
          name={"Carnivale"}
          month={"Jul"}
          day={18}
          type={"Italian"}
        />
        <FestivalCard
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
          }
          name={"Carnivale"}
          month={"Jul"}
          day={18}
          type={"Italian"}
        />
        <FestivalCard
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque."
          }
          name={"Carnivale"}
          month={"Jul"}
          day={18}
          type={"Italian"}
        />
      </div>
    </div>
  );
};
