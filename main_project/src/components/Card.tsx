const Card = () => {
  return (
    <div className="max-w-sm transform border border-black bg-white shadow transition duration-300 ease-in-out md:hover:-translate-y-14">
      <a href="#">
        <img className="rounded-t-lg" src="" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Fact
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are some facts about something interesting idk.
        </p>
        <a
          href="#"
          className="inline-flex items-center border border-black bg-myPurple px-3 py-2 text-center text-sm font-medium text-white  hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
        >
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
