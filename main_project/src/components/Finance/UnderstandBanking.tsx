import { MdBusinessCenter } from "react-icons/md";
import { FaCreditCard, FaWifi } from "react-icons/fa";

const UnderstandBanking = () => {
  return (
    <section
      className="body-font min-h-screen text-gray-600"
      id="BankInformation"
    >
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 ">
          <h1 className="pb-12 text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Understanding Australian Banking:
          </h1>
          <p className="text-gray-500s mx-auto text-base leading-relaxed">
            Australia boasts a sophisticated banking system, offering a wide
            array of services to individuals, families, and businesses alike.
            From everyday transactions to long-term investments, Australian
            banks provide the necessary tools and support to help you manage
            your finances effectively.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex h-1 w-16 rounded-full bg-indigo-500" />
          </div>
        </div>
        <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <FaCreditCard className="h-10 w-10" />
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Retail Banks
              </h2>
              <p className="text-base leading-relaxed">
                Serving individuals and small businesses, retail banks offer
                essential services such as savings accounts, checking accounts,
                loans, credit cards, and mortgages. This includes the "Big 4"
                Banks.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <MdBusinessCenter className="h-10 w-10" />
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Commercial Banks
              </h2>
              <p className="text-base leading-relaxed">
                Targeting larger businesses and corporations, commercial banks
                provide a broader range of financial services, including
                business loans, corporate accounts, trade finance, and treasury
                services. You won't have to worry about these for know!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <FaWifi className="h-10 w-10" />
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Online Banks
              </h2>
              <p className="text-base leading-relaxed">
                Embracing the digital age, online banks deliver banking services
                exclusively through digital channels, offering convenience and
                often competitive rates. These include all the Big 4 and online
                exclusive banks such as UpBank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandBanking;
