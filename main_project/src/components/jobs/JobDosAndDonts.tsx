import React from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

interface CardProps {
  name: string;
  desc: string;
  label: boolean;
}
const Card: React.FC<CardProps> = ({ name, desc, label }) => (
  <div className="w-full p-2 sm:w-1/2">
    <div className="flex h-full rounded bg-gray-100 p-4">
      {label ? (
        <FaCircleCheck className="mr-4 h-6 w-6 flex-shrink-0 text-green-500" />
      ) : (
        <FaCircleXmark className="mr-4 h-6 w-6 flex-shrink-0 text-red-500" />
      )}
      <span className="title-font text-md font-bold text-gray-700 ">
        {name}
        <p className="font-normal">{desc}</p>
      </span>
    </div>
  </div>
);

const JobDosAndDonts = () => {
  return (
    <section className="body-font ">
      <div className="container mx-auto px-5 py-8">
        <h3 className="my-5 text-2xl font-bold">Aussie Work Culture</h3>
        <p className="my-5 text-base leading-8">
          When working in Australia, it's essential to adhere to certain dos and
          don'ts to ensure smooth integration into the workplace and avoid any
          cultural or professional misunderstandings. Here are some key things
          to keep in mind.
        </p>
        <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
          <Card
            name={"Punctuality"}
            desc={
              "Australians value punctuality, so make sure to arrive on time for work, meetings, and appointments."
            }
            label={true}
          />
          <Card
            name={"Don't ignore safety"}
            desc={
              "Prioritize workplace safety and follow safety protocols to prevent accidents or injuries."
            }
            label={false}
          />
          <Card
            name={"Work-life balance"}
            label={true}
            desc={
              "Australians value work-life balance, so strive to maintain a healthy balance between work and personal life."
            }
          />
          <Card
            name={"Don't neglect feedback"}
            label={false}
            desc={
              "Be open to receiving feedback from colleagues and supervisors, and use it constructively to improve performance."
            }
          />
          <Card
            name={"Teamwork"}
            label={true}
            desc={
              "Emphasise teamwork and collaboration, as Australians appreciate working together to achieve common goals."
            }
          />
          <Card
            name={"Don't disregard cultural differences"}
            label={false}
            desc={
              "Be mindful of cultural differences and avoid making assumptions or judgments based on cultural stereotypes."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default JobDosAndDonts;
