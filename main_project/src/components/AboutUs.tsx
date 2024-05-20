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
            <div className="w-full p-4 lg:w-1/2">
              <h2 className="mb-4 text-center text-4xl font-semibold lg:text-5xl">
                Our History
              </h2>
              <p className="text-lg text-gray-600">
                Wominjeka began as a vision to create a transformative platform
                that would enrich the settlement experience of newcomers to
                Victoria. Since our inception, we have been committed to
                providing innovative solutions to the challenges faced by recent
                migrants as they embark on their Australian journey.
              </p>
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
