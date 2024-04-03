import React from "react";

interface SignificantEventProps {
  image?: string;
  description?: string;
  name?: string;
  date?: string;
}

export const SignificantEvent: React.FC<SignificantEventProps> = ({
  image,
  description,
  name,
  date,
}) => (
  <div className="p-4 md:w-1/2 xl:w-1/4">
    <div className="rounded-lg bg-gray-100 p-6">
      <img
        className="mb-6 h-40 w-full rounded object-cover object-center"
        src={image}
        alt="content"
      />
      <h3 className="title-font text-xs font-medium tracking-widest text-indigo-500">
        {date}
      </h3>
      <h2 className="title-font mb-4 text-lg font-medium text-gray-900">
        {name}
      </h2>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  </div>
);
