import React from "react";

interface SourceInfo {
    name: string;
    year: string;
    link: string;
}

const parseSources = (sources: string[]): SourceInfo[] => {
    const parsedSources: SourceInfo[] = [];

    sources.forEach(source => {
        const nameMatch = source.match(/^(.*?)\s\((\d{4})\)/);
        const linkMatch = source.match(/Available at:\s(https?:\/\/\S+)/);

        if (nameMatch && linkMatch) {
            const name = nameMatch[1].trim();
            const year = nameMatch[2];
            const link = linkMatch[1];

            parsedSources.push({name, year, link});
        }
    });

    return parsedSources;
};

interface SourcesListProps {
    sources: string[],
}

export const SourcesList: React.FC<SourcesListProps> = ({sources}) => {
    const parsedSources = parseSources(sources)
    return (
        <div className="max-w-lg bg-white rounded-xl overflow-hidden shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Sources of Information</h2>
            <ul>
                {parsedSources.map((source, index) => (
                    <>
                        <li key={index} className="mb-3">
                            {source.name}. ({source.year}). <i>{source.name}</i>. Available at: <a href={source.link}
                                                                                                   target="_blank"
                                                                                                   rel="noopener noreferrer"
                                                                                                   className="text-blue-600 hover:underline">{source.link}</a>
                        </li>

                    </>
                ))}
            </ul>
            <p className="font-bold">List may be incomplete due to parsing issues</p>
        </div>
    );
};