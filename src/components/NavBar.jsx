import { Link } from "react-router";
import { links } from "../App";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[rgb(173,216,230)] via-[rgb(135,206,250)] to-[rgb(70,130,180)] text-white h-20 flex items-center justify-between rounded-b-sm shadow-[0_0_25px_black] px-5">
      <img className="" src="" alt="logo" />
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
