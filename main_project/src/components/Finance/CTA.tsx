const Cta = () => {
  return (
    <>
      {/* Hero */}
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="mx-auto max-w-[85rem] space-y-8 px-4 py-24 sm:px-6 lg:px-8">
          {/* Announcement Banner */}
          <div className="flex justify-center"></div>
          {/* Title */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="block text-4xl font-medium text-gray-200 sm:text-5xl md:text-6xl lg:text-7xl">
              Ready To Find The Debit Card For You?
            </h1>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-400">
              Let us help you with that. We've curated the best bank interest
              rates currently on the market. Have a browse!
            </p>
          </div>
          {/* Buttons */}
          <div className="text-center">
            <a
              className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-gradient-to-tl from-blue-600 to-violet-600 px-6 py-3 text-center text-sm font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-1 focus:ring-gray-600"
              href={"#bankrates"}
            >
              Get started
              <svg
                className="size-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
