import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={50} className="space-x-10">
        <Link to="/news">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
        </Link>
        <Link to="/news">
          Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine
        </Link>
        <Link to="/news">
          Joe Biden announces $3 billion in Ukraine weapons aid
        </Link>
        <Link to="/news">
          Biden announces $3 billion Ukraine military aid package on its Independence Day
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
