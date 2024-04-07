import React from "react";

interface Source {
  author: string;
  date: string;
  link: string;
  title: string;
}

interface SourcesListProps {
  sources: Source[];
}

const SourcesList: React.FC<SourcesListProps> = ({ sources }) => {
  return (
    <div className="max-w-lg  rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold">Sources of Information</h2>
      <ul>
        {sources.map((source, index) => (
          <li key={index} className="mb-3">
            {source.author}. ({source.date}). <i>{source.title}</i>. Available
            at:{" "}
            <a
              href={source.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {source.link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourcesList;
