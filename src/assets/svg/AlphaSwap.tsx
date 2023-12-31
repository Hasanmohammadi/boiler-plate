import { memo } from 'react';

function AlphaSwap({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="10" fill="white" stroke="#9B9B9B" />
      <path
        d="M16 10H6"
        stroke="#FFC107"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10L9 7L6 10Z"
        stroke="#FFC107"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 13H16"
        stroke="#FFC107"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 13L13 16L16 13Z"
        stroke="#FFC107"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default memo(AlphaSwap);
