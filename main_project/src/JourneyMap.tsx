import { MdHome } from "react-icons/md";
import { FaEarthAfrica, FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FaChartLine, FaStreetView } from "react-icons/fa";
import { BiSolidBank, BiSolidParty } from "react-icons/bi";
import { BsSuitcaseLgFill } from "react-icons/bs";

const JourneyMap = () => {
  const { pathname } = useLocation();

  const selected = (location: string): string => {
    const styles =
      pathname === location
        ? " bg-myDarkPurple text-white"
        : "hover:bg-myDarkPurple hover:text-white";

    return `rounded-lg p-2 z-40 relative group ${styles}`;
  };
  return (
    <div className="fixed right-0 top-1/2 z-40 mr-4 -translate-y-1/2 transform rounded-lg border border-black bg-white bg-opacity-15 p-1 opacity-40 shadow-md hover:opacity-80">
      {/* Your content goes here */}
      <div className=" flex flex-col gap-1 text-myDarkPurple">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/"}
          className={selected("/")}
        >
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Home</p>
          </div>
          <MdHome size={25} />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/cultures"}
          className={selected("/cultures")}
        >
          <FaEarthAfrica size={25} className="" />
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Countries</p>
          </div>
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/explore/"}
          className={selected("/explore/")}
        >
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Suburbs</p>
          </div>
          <FaStreetView size={25} className="" />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/festivals/"}
          className={selected("/festivals/")}
        >
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Festivals</p>
          </div>
          <BiSolidParty size={25} className="" />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/finance/rates"}
          className={selected("/finance/rates")}
        >
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Banking</p>
          </div>
          <BiSolidBank size={25} className="" />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/finance/super"}
          className={selected("/finance/super")}
        >
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Superannuation</p>
          </div>
          <FaMoneyBillTrendUp size={25} className="" />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/dashboard"}
          className={selected("/dashboard")}
        >
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Investments</p>
          </div>
          <FaChartLine size={25} className="" />
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={"/jobs"}
          className={selected("/jobs")}
        >
          <div className="invisible absolute right-0 top-0 mr-12  rounded-lg bg-myDarkPurple group-hover:visible">
            <p className="p-2">Work</p>
          </div>
          <BsSuitcaseLgFill size={25} className="" />
        </Link>
      </div>
    </div>
  );
};

export default JourneyMap;
