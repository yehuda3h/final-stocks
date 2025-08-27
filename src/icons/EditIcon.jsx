import React from 'react'

export default function EditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="3" y="17" width="6" height="4" fill="#3b82f6" stroke="none" />
      <path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
        fill="#3b82f6"
        stroke="#3b82f6"
      />
      <path
        d="M21.41 6.34a1.25 1.25 0 0 0 0-1.77l-2-2a1.25 1.25 0 0 0-1.77 0l-1.83 1.83 3.75 3.75 1.85-1.81z"
        fill="#3b82f6"
        stroke="#3b82f6"
      />
      <path d="M17.81 9.94l-3.75-3.75" stroke="#1e40af" strokeWidth={2} />
    </svg>
  );
}
