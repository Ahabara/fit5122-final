import {
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaUserSecret,
} from "react-icons/fa";

const MoreInfo = () => {
  return (
    <>
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-10 max-w-3xl lg:mb-4">
          <h2 className="pb-4 text-4xl font-extrabold text-white sm:text-5xl">
            Worry Not! Australia's Got Your Back
          </h2>
          <p className="mt-1 text-neutral-400">
            Australian banks are some of the safest in the world.
          </p>
        </div>
        <div className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group flex size-full gap-y-6 rounded-lg p-5 transition-all hover:bg-neutral-800">
            <FaFileInvoiceDollar
              className="me-6 mt-0.5 size-8 flex-shrink-0 text-gray-100"
              width={24}
              height={24}
            ></FaFileInvoiceDollar>
            <div>
              <div>
                <h3 className="block font-bold text-gray-100">
                  Fees and Charges
                </h3>
                <p className="text-neutral-400">
                  While banks in Australia may charge fees for certain services,
                  many offer fee-free accounts or waive fees under specific
                  conditions. It's essential to understand these fees and
                  explore options that best suit your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="group flex size-full gap-y-6 rounded-lg p-5 transition-all hover:bg-neutral-800">
            <FaBalanceScale
              className="me-6 mt-0.5 size-8 flex-shrink-0 text-gray-100"
              width={24}
              height={24}
            ></FaBalanceScale>
            <div>
              <div>
                <h3 className="block font-bold text-gray-100">
                  Regulatory Environment
                </h3>
                <p className="text-neutral-400">
                  Rest assured, Australian banks operate within a robust
                  regulatory framework overseen by agencies such as the
                  Australian Prudential Regulation Authority (APRA) and the
                  Australian Securities and Investments Commission (ASIC). These
                  bodies ensure financial stability and consumer protection.
                </p>
              </div>
            </div>
          </div>
          <div className="group flex size-full gap-y-6 rounded-lg p-5 transition-all hover:bg-neutral-800">
            <FaUserSecret
              className="me-6 mt-0.5 size-8 flex-shrink-0 text-gray-100"
              width={24}
              height={24}
            ></FaUserSecret>
            <div>
              <div>
                <h3 className="block font-bold text-gray-100">
                  Security and Protection
                </h3>
                <p className="text-neutral-400">
                  Your security is paramount. Australian banks employ
                  state-of-the-art security measures to safeguard your
                  information and transactions, including encryption,
                  multi-factor authentication, and fraud monitoring systems.
                  Additionally, robust laws and regulations protect consumers
                  and provide avenues for dispute resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
