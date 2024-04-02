import React from "react";

interface MostSpokenLanguagesProps {
    languages: string[]
}

export const MostSpokenLanguages: React.FC<MostSpokenLanguagesProps> = ({languages}) => {
    return <>
        <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg">
            <div className="bg-gray-100 py-2 px-4">
                <h2 className="text-xl font-semibold text-gray-800">Most Spoken Languages</h2>
            </div>
            {languages.map((language, i) => (
                <ul className="divide-y divide-gray-200">
                    <li className="flex items-center py-4 px-6">
                        <span className="text-gray-700 text-lg font-medium mr-4">{i + 1}.</span>
                        <div className="flex-1 mr-4">
                            <h3 className="text-lg font-medium text-gray-800">{language}</h3>
                        </div>
                    </li>
                </ul>
            ))}
        </div>
    </>
}