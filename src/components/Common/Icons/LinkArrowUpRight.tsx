import React from "react";
const LinkArrowUpRight: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.2429 8.34285L3.65709 8.34285L3.65709 6.34315H14.6568V17.3429L12.6571 17.3429L12.6571 9.75706L4.05024 18.364L2.63603 16.9498L11.2429 8.34285Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkArrowUpRight;
