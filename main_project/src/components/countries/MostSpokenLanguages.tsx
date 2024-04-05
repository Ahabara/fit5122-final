import React from "react";

interface MostSpokenLanguagesProps {
  languages: string[];
}

export const MostSpokenLanguages: React.FC<MostSpokenLanguagesProps> = ({
  languages,
}) => {
  return (
    <>
      <div className="max-w-lg overflow-hidden rounded-md bg-white shadow-md">
        <div className="bg-gray-100 px-4 py-2">
          <h2 className="text-xl font-semibold text-gray-800">
            Most Spoken Languages
          </h2>
        </div>
        {languages.map((language, i) => (
          <ul className="divide-y divide-gray-200" key={i}>
            <li className="flex items-center px-6 py-4">
              <span className="mr-4 text-lg font-medium text-gray-700">
                {i + 1}.
              </span>
              <div className="mr-4 flex-1">
                <h3 className="text-lg font-medium text-gray-800">
                  {language}
                </h3>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};
