import { MdHome } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { FaPiggyBank, FaStreetView } from "react-icons/fa";
import { BiSolidBank, BiSolidParty } from "react-icons/bi";

const JourneyMap = () => {
  const { pathname } = useLocation();

  const selected = (location: string): string => {
    const styles =
      pathname === location
        ? " bg-myDarkPurple text-white"
        : "hover:bg-myDarkPurple hover:text-white";

    return `rounded-lg p-2 ${styles}`;
  };
  return (
    <div className="fixed right-0 top-1/2 z-40 mr-4 -translate-y-1/2 transform rounded-lg border border-black bg-white bg-opacity-15 p-1 opacity-80 shadow-md">
      {/* Your content goes here */}
      <div className="flex flex-col gap-1 text-myDarkPurple">
        <Link to={"/"} className={selected("/")}>
          <MdHome size={25} />
        </Link>
        <Link to={"/"} className={selected("de")}>
          <FaEarthAfrica size={25} className="" />
        </Link>
        <Link to={"/explore/"} className={selected("/explore/")}>
          <FaStreetView size={25} className="" />
        </Link>
        <Link to={"/festivals/"} className={selected("/festivals/")}>
          <BiSolidParty size={25} className="" />
        </Link>
        <Link to={"/finance/rates"} className={selected("/finance/rates")}>
          <BiSolidBank size={25} className="" />
        </Link>
        <Link to={"/finance/super"} className={selected("/finance/super")}>
          <FaPiggyBank size={25} className="" />
        </Link>
        {/*    BiSolidBank*/}
      </div>
    </div>
  );
};

export default JourneyMap;
