import React from "react";

interface Props {
  question?: string;
  answer?: string;
}

const BankFaqCard: React.FC<Props> = ({ question, answer }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-200">{question}</h3>
      <p className="mt-2 text-gray-400">{answer}</p>
    </div>
  );
};

const BankFaq = () => {
  const faq = [
    {
      question: "What types of banks are available in Australia?",
      answer:
        "Australia offers a variety of banks, including retail banks (serving individuals and small businesses), commercial banks (for larger businesses and corporations), online banks (operating solely through digital channels), and mutual banks/credit unions (member-owned cooperatives).",
    },
    {
      question: "What services do Australian banks offer?",
      answer:
        "Australian banks provide a wide range of services, including savings accounts, transaction accounts, term deposits, credit cards, loans (such as home loans, personal loans, and business loans), online and mobile banking, and more.",
    },
    {
      question: "Are there fees associated with banking in Australia?",
      answer:
        "Yes, banks in Australia may charge fees for certain services, such as ATM withdrawals, international transactions, and account maintenance. However, many banks offer fee-free accounts or waive fees under specific conditions.",
    },
    {
      question: "How is the banking sector regulated in Australia?",
      answer:
        "The banking sector in Australia is regulated by agencies such as the Australian Prudential Regulation Authority (APRA) and the Australian Securities and Investments Commission (ASIC). These bodies ensure financial stability and consumer protection through rigorous oversight and enforcement of regulations.",
    },
    {
      question: "What security measures do Australian banks employ?",
      answer:
        "Australian banks prioritize the security of customer information and transactions by using encryption, multi-factor authentication, and fraud monitoring systems. Additionally, strict laws and regulations protect consumers and provide avenues for dispute resolution.",
    },
    {
      question: "Can non-residents open bank accounts in Australia?",
      answer:
        "Yes, non-residents can typically open bank accounts in Australia, but requirements may vary depending on the bank and visa status. It's advisable to check with individual banks for specific eligibility criteria and documentation requirements.",
    },
    {
      question:
        "How do I access banking services in Australia if I'm overseas?",
      answer:
        "Most Australian banks offer online and mobile banking platforms, allowing you to access your accounts and perform transactions from anywhere in the world with an internet connection. Some banks also have partnerships with international banks or provide services for expatriates.",
    },
    {
      question: "What should I consider when choosing a bank in Australia?",
      answer:
        "When selecting a bank in Australia, factors to consider include the range of services offered, fees and charges, interest rates, convenience (such as branch locations and online banking features), reputation, and customer service quality.",
    },
    {
      question: "How can I resolve disputes with my bank in Australia?",
      answer:
        "If you have a dispute with your bank in Australia, you can typically escalate the issue through the bank's internal complaints process. If the matter remains unresolved, you can contact external dispute resolution schemes such as the Australian Financial Complaints Authority (AFCA) for assistance.",
    },
    {
      question: "Are my deposits in Australian banks protected?",
      answer:
        "Yes, deposits in Australian banks are generally protected by the Australian Government's Financial Claims Scheme (FCS), which provides a guarantee for deposits up to a certain limit in the event of a bank failure. It's important to check with individual banks for specific details regarding deposit protection.",
    },
  ];
  return (
    <div className="bg-neutral-900">
      <>
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
            <h2 className="text-2xl font-bold text-gray-200 md:text-3xl md:leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 md:gap-12">
              {faq.map((item, i) => (
                <BankFaqCard
                  question={item.question}
                  answer={item.answer}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BankFaq;
