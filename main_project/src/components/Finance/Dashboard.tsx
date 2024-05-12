import { useState } from "react";
import DashboardScreen from "./dashboard/DashboardScreen.tsx";
import Investments from "./dashboard/Investments.tsx";
import CTA from "../CTA.tsx";

const Dashboard = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const displays = [<Investments />, <DashboardScreen />];
  return (
    <>
      <div id="app" className="antialiased md:flex">
        <aside className="w-full  md:flex  md:w-64 md:flex-col">
          <nav className="h-full flex-grow overflow-y-auto">
            <header>
              <span className="block px-6 py-6 text-xs text-gray-500">
                MENU
              </span>
            </header>
            <ul className="px-4 text-left font-medium">
              <li className="text-gray-900">
                <button
                  className={`block w-full rounded px-6 py-3 text-left text-sm hover:bg-purple-400 ${pageNumber === 0 ? "bg-purple-300" : ""}`}
                  onClick={() => setPageNumber(0)}
                >
                  Investments Basics
                </button>
                <button
                  className={`block w-full rounded px-6 py-3 text-left text-sm hover:bg-purple-400 ${pageNumber === 1 ? "bg-purple-300" : ""}`}
                  onClick={() => setPageNumber(1)}
                >
                  Investment Dashboard
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        <main className=" w-full overflow-y-auto text-gray-700">
          {displays[pageNumber]}
        </main>
      </div>
      <CTA
        link={"/jobs"}
        title={"Ready To Start Working And Building Your Future?"}
        paragraph={
          "Starting a new job can be daunting as it is, no less in a new country. Not to worry, we have all the insider scoop and tips to help you thrive in your new environment!"
        }
      />
    </>
  );
};

export default Dashboard;
