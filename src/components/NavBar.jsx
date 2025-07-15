import { useContext } from "react";
import { Link } from "react-router";
import { links } from "../App";
import AuthContext from "../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  
  
  return (
    <div className="bg-gradient-to-r from-[rgb(173,216,230)] via-[rgb(135,206,250)] to-[rgb(70,130,180)] text-white h-20 flex items-center justify-between rounded-b-sm shadow-[0_0_25px_black] px-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center">
            {/* Modern minimalist cart icon in dark blue */}
            <svg
              className="w-8 h-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="8"
                width="24"
                height="14"
                rx="3"
                stroke="#183153"
                strokeWidth="2.2"
                fill="#fff"
              />
              <circle cx="10" cy="26" r="2.2" fill="#183153" />
              <circle cx="22" cy="26" r="2.2" fill="#183153" />
              <path
                d="M8 12h16"
                stroke="#183153"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="ml-2">
            <h1 className="text-xl font-extrabold tracking-tight text-[#183153] leading-none">
              Easy stocks
            </h1>
            <p className="text-xs text-[#183153] opacity-70 font-medium">
              The easy way to trade stocks
            </p>
          </div>
        </div>
      </div>
      <ul className="flex  gap-8  ">
        {links.map(({ path, title, icon }) => (
          <li
            className="hover:text-blue-600 flex items-center gap-1"
            key={path}
          >
            <Link to={path} className="flex items-center gap-1">
              {icon}
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
