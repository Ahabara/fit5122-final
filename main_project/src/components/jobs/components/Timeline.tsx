const Timeline = () => {
  return (
    <>
      <div className="container mx-auto h-full w-full ">
        <h1 className="mt-8 text-center text-5xl font-bold text-gray-800">
          Career Navigation
        </h1>
        <div className="wrap relative h-full overflow-hidden p-10">
          <div
            className="border-2-2 absolute h-full border border-gray-700 border-opacity-20"
            style={{ left: "50%" }}
          />
          <div className="right-timeline mb-8 flex w-full items-center justify-between">
            <div className="order-1 w-5/12" />
            <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
            </div>
            <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Explore the Job Scene
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Get the scoop on what's happening in the job market in Victoria.
                Dive into online job boards, peek at industry reports, and snoop
                around government websites to see what opportunities are
                brewing.
              </p>
            </div>
          </div>
          <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
            <div className="order-1 w-5/12" />
            <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
            </div>
            <div className="order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-white">
                Access Your Skills
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Take a moment to check in with yourself. What are you good at?
                What gets you excited? Take stock of your skills,
                qualifications, and experiences. Think about how they match up
                with what's hot in Victoria's job market.
              </p>
            </div>
          </div>
          <div className="right-timeline mb-8 flex w-full items-center justify-between">
            <div className="order-1 w-5/12" />
            <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
            </div>
            <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Spruce Up Your CV and Cover Letter
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Time to give your resume and cover letter a makeover! Show off
                your best bits—your skills, experiences, and achievements.
                Tailor each application to fit the job like a custom-made suit.
              </p>
            </div>
          </div>
          <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
            <div className="order-1 w-5/12" />
            <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
            </div>
            <div className="order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-white">Get Social</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Get your networking game on! Hang out with professionals on
                LinkedIn, mingle at industry events, and join cool professional
                associations. Making connections can open doors to hidden job
                gems and juicy referrals.
              </p>
            </div>
          </div>
          <div className="right-timeline mb-8 flex w-full items-center justify-between">
            <div className="order-1 w-5/12" />
            <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">5</h1>
            </div>
            <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Dive into Job Boards
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Hit up those online job portals like it's your favourite
                streaming service. Scroll, swipe, and set up alerts to catch the
                latest job offerings that match your vibe.
              </p>
            </div>
          </div>
          <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
            <div className="order-1 w-5/12" />
            <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">6</h1>
            </div>
            <div className="order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-white">
                Apply, Apply, Apply
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Time to throw your hat in the ring! Apply for jobs that make
                your heart skip a beat. Pay attention to the application deets
                and make sure your application shines brighter than the rest.
              </p>
            </div>
          </div>
          <div className="right-timeline mb-8 flex w-full items-center justify-between">
            <div className="order-1 w-5/12" />
            <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
              <h1 className="mx-auto text-lg font-semibold text-white">7</h1>
            </div>
            <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                Ace the Interview
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                It's showtime! Prep for those job interviews like you're
                prepping for your own talk show. Do your research, practice your
                lines, and show up looking sharp. You got this!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
