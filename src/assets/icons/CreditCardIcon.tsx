function CreditCardIcon({ width, height, color, className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      color={color}
      viewBox="0 0 52 32"
      fill="currentColor"
    >
      <g clipPath="url(#clip0_230_973)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.43597 2.18404C1 3.03969 1 4.15979 1 6.4V18.2152C1 20.4554 1 21.5755 1.43597 22.4311C1.81947 23.1838 2.43139 23.7957 3.18404 24.1792C4.03969 24.6152 5.15979 24.6152 7.4 24.6152H15.7701L15.7721 13.321C15.7956 11.3827 16.012 10.3715 16.5729 9.32257C17.1167 8.30582 17.922 7.50051 18.9388 6.95674C20.0532 6.36074 21.1251 6.15373 23.3117 6.15373L34.2304 6.15487C34.2299 4.07691 34.2143 3.00789 33.7945 2.18404C33.411 1.43139 32.7991 0.819467 32.0464 0.435974C31.1908 0 30.0707 0 27.8305 0H7.4C5.15979 0 4.03969 0 3.18404 0.435974C2.43139 0.819467 1.81947 1.43139 1.43597 2.18404Z"
          fill="#005E7B"
        />
        <rect x="5.9231" y="4.92285" width="6.15379" height="6.15379" rx="1" fill="white" />
        <rect x="5.9231" y="14.7692" width="9.84606" height="2.46152" fill="white" />
        <rect
          x="17.9998"
          y="8.38501"
          width="31.2305"
          height="22.6152"
          rx="3"
          fill="white"
          stroke="#005E7B"
          strokeWidth="2"
        />
        <rect x="18.2297" y="13.5382" width="30.7689" height="3.69227" fill="#005E7B" />
        <rect x="21.9229" y="22.1536" width="11.0768" height="2.46152" fill="#005E7B" />
        <rect x="37.9229" y="19.6921" width="6.15379" height="6.15379" rx="1" fill="#005E7B" />
      </g>
      <defs>
        <clipPath id="clip0_230_973">
          <rect width="52" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CreditCardIcon;
