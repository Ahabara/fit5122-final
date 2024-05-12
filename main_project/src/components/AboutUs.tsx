import Layout from "./landing/Layout.tsx";
import AboutHero from "./landing/About/AboutHero.tsx";

const AboutUs = () => {
  return (
    <Layout>
      <AboutHero />
      <section className="overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="-mx-4 mb-32 flex flex-wrap">
            <div className="w-full p-4 lg:w-1/2">
              <h2 className="mb-4 text-center text-4xl font-semibold lg:text-5xl">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                Welcome to Wominjeka, your guiding beacon for navigating the
                Australian odyssey! Founded in 2024 by a passionate team of four
                individuals, Wominjeka is dedicated to making a positive impact
                on the lives of recent migrants to Victoria, Australia.
              </p>
            </div>
            <div className="w-full p-4 lg:w-1/2">
              <h2 className="mb-4 text-center text-4xl font-semibold lg:text-5xl">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600">
                At Wominjeka, we envision a future where every recent migrant to
                Victoria not only survives but thrives. We aspire to create a
                welcoming and inclusive community where cultural diversity is
                celebrated, and every individual has the opportunity to fulfill
                their potential. Through our platform, we aim to equip newcomers
                with the knowledge and skills they need to build successful and
                fulfilling lives in their new home.
              </p>
            </div>
          </div>
          <div className="-mx-8 mb-32 flex flex-wrap">
            <div className="w-full px-8 lg:w-1/3">
              <h2 className="font-heading mb-20 max-w-xs text-3xl font-bold lg:max-w-lg lg:text-6xl">
                Our History
              </h2>
            </div>
            <div className="w-full px-8 lg:w-2/3">
              <p className="mb-6 text-lg text-gray-600">
                Wominjeka began as a vision to create a transformative platform
                that would enrich the settlement experience of newcomers to
                Victoria. Since our inception, we have been committed to
                providing innovative solutions to the challenges faced by recent
                migrants as they embark on their Australian journey.
              </p>
            </div>
            <div className="w-full px-8">
              <p className="font-heading mb-8 max-w-xs text-3xl font-bold lg:max-w-lg lg:text-6xl">
                Significant Milestones
              </p>
            </div>
            <br />
            <div className="w-2/3 space-y-8 px-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
              {/* Item #1 */}
              <div className="relative">
                <div className="mb-3 items-center md:flex md:space-x-4">
                  <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                      <svg
                        className="fill-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                      >
                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                      </svg>
                    </div>
                    {/* Date */}
                    <time className="font-caveat text-xl font-medium text-indigo-500 md:w-28">
                      March 2024
                    </time>
                  </div>
                  {/* Title */}
                  <div className="ml-14 rounded border border-slate-200 bg-white p-4 text-slate-500 shadow md:ml-44">
                    Wominjeka was founded by a dedicated team of four
                    enthusiasts, marking the beginning of our mission to empower
                    recent migrants through cultural immersion and financial
                    literacy.
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className="relative">
                <div className="mb-3 items-center md:flex md:space-x-4">
                  <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                      <svg
                        className="fill-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                      >
                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                      </svg>
                    </div>
                    {/* Date */}
                    <time className="font-caveat text-xl font-medium text-indigo-500 md:w-28">
                      April 2024
                    </time>
                  </div>
                  {/* Title */}
                  <div className="ml-14 rounded border border-slate-200 bg-white p-4 text-slate-500 shadow md:ml-44">
                    We launched Iteration 1 of our platform, focusing on
                    cultural immersion and exploration, inviting users to delve
                    into Victoria's vibrant cultural landscape.
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className="relative">
                <div className="mb-3 items-center md:flex md:space-x-4">
                  <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                      <svg
                        className="fill-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                      >
                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                      </svg>
                    </div>
                    {/* Date */}
                    <time className="font-caveat text-xl font-medium text-indigo-500 md:w-28">
                      April 2024
                    </time>
                  </div>
                  {/* Title */}
                  <div className="ml-14 rounded border border-slate-200 bg-white p-4 text-slate-500 shadow md:ml-44">
                    Building upon our foundation, we introduced Iteration 2,
                    which integrated essential financial literacy into our core
                    offerings, recognizing the importance of financial acumen in
                    navigating life in a new country.
                  </div>
                </div>
                {/* Card */}
              </div>
              <div className="relative">
                <div className="mb-3 items-center md:flex md:space-x-4">
                  <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                      <svg
                        className="fill-emerald-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                      >
                        <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                      </svg>
                    </div>
                    {/* Date */}
                    <time className="font-caveat text-xl font-medium text-indigo-500 md:w-28">
                      May 2024
                    </time>
                  </div>
                  {/* Title */}
                  <div className="ml-14 rounded border border-slate-200 bg-white p-4 text-slate-500 shadow md:ml-44">
                    Iteration 3 we aimed to provide recent migrants with a
                    comprehensive understanding of the job market and investment
                    strategies, further empowering them to thrive in their new
                    home.
                  </div>
                </div>
                {/* Card */}
              </div>
            </div>
          </div>
          <section className="body-font text-gray-600">
            <div className="flex flex-wrap px-5 py-8">
              <div className="-m-4 flex flex-wrap">
                <div className="p-4 md:w-full lg:w-1/2">
                  <div className="flex flex-col rounded-lg  border-opacity-50 p-8 sm:flex-row">
                    <div className="mb-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mb-0 sm:mr-8">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                        Core Values
                      </h2>
                      <p className="py-3 text-base leading-relaxed">
                        <strong>Empowerment</strong>: We believe in empowering
                        recent migrants by providing them with the tools and
                        resources they need to succeed.
                      </p>
                      <p className="py-3 text-base leading-relaxed">
                        <strong>Inclusivity</strong>: We are committed to
                        creating a welcoming and inclusive environment where
                        everyone feels valued and respected.
                      </p>
                      <p className="py-3 text-base leading-relaxed">
                        <strong>Innovation</strong>: We embrace innovation and
                        strive to continuously improve our platform to better
                        serve the needs of our users.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-full lg:w-1/2">
                  <div className="flex flex-col rounded-lg  border-opacity-50 p-8 sm:flex-row">
                    <div className="mb-4 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 sm:mb-0 sm:mr-8">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="h-10 w-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                        Social Responsibility Initiatives
                      </h2>
                      <p className="text-base leading-relaxed">
                        At Wominjeka, we are steadfast in our dedication to
                        advancing the United Nations Sustainable Development
                        Goals (SDGs), particularly focusing on Goal 10, "Reduced
                        Inequalities," with a specific emphasis on "Bridging
                        Culture." We recognize the pivotal role that cultural
                        understanding plays in fostering harmony and inclusivity
                        within communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
