import styles from "./bottom.module.sass";

export const HeroBackgroundBottom = ({ className }: any) => {
  return (
    <svg
      width="1064"
      height="191"
      viewBox="0 0 1064 191"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.heroBackgroundBottom} ${className}`}
    >
      <g clipPath="url(#clip0_81_564)">
        <path
          d="M485.5 -129.746V-129.747V-362.207L0.5 -130.548V190.207L405.931 -3.4256L406.147 -2.97443L405.931 -3.42566C429.76 -14.8012 449.882 -32.7049 463.964 -55.0619C478.047 -77.419 485.514 -103.314 485.5 -129.746Z"
          stroke="url(#paint0_linear_81_564)"
        />
        <path
          d="M578.5 -129.746V-129.747V-362.207L1063.5 -130.548V190.207L658.069 -3.4256L657.853 -2.97443L658.069 -3.42566C634.24 -14.8012 614.118 -32.7049 600.036 -55.0619C585.953 -77.419 578.486 -103.314 578.5 -129.746Z"
          stroke="url(#paint1_linear_81_564)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_81_564"
          x1="243"
          y1="20"
          x2="243"
          y2="191"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#824EDC" stopOpacity="0" />
          <stop offset="1" stopColor="#824EDC" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_81_564"
          x1="821"
          y1="20"
          x2="821"
          y2="191"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#824EDC" stopOpacity="0" />
          <stop offset="1" stopColor="#824EDC" />
        </linearGradient>
        <clipPath id="clip0_81_564">
          <rect width="1064" height="191" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
