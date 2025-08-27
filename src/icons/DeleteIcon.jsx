import React from "react";

export default function DeleteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect
        x="6"
        y="7"
        width="12"
        height="13"
        rx="2"
        fill="#fff"
        stroke="#dc2626"
      />
      <rect
        x="9"
        y="10"
        width="2"
        height="7"
        rx="1"
        fill="#dc2626"
        stroke="none"
      />
      <rect
        x="13"
        y="10"
        width="2"
        height="7"
        rx="1"
        fill="#dc2626"
        stroke="none"
      />
      <rect
        x="8"
        y="4"
        width="8"
        height="3"
        rx="1.5"
        fill="#fff"
        stroke="#dc2626"
      />
      <line x1="10" y1="4" x2="10" y2="3" stroke="#dc2626" strokeWidth={2} />
      <line x1="14" y1="4" x2="14" y2="3" stroke="#dc2626" strokeWidth={2} />
    </svg>
  );
}
