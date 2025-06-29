import { Link } from "react-router";
import { links } from "../App";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[rgb(173,216,230)] via-[rgb(135,206,250)] to-[rgb(70,130,180)] text-white h-20 flex items-center justify-between rounded-b-sm shadow-[0_0_25px_black] px-5">
      <div className="flex items-center gap-2">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            <path d="M12 12.252A8.014 8.014 0 0117.748 18H12v-5.748z" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold">StockMaster</h1>
          <p className="text-xs opacity-80">Your Trading Hub</p>
        </div>
      </div>
      <ul className="flex  gap-8  ">
        {links.map(({ path, title }) => (
          <li className="hover:text-blue-600" key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
