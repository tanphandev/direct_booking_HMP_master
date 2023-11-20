function ATM({ width, height }: { width: string; height: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        d="M6.702 13.174H3.663L2.985 15.001H2L4.767 8.001H5.603L8.375 15.001H7.395L6.702 13.174ZM3.955 12.41H6.419L5.185 9.14L3.955 12.41ZM13.714 8.76H11.385V15H10.435V8.76H8.111V8H13.711L13.714 8.76ZM16.023 8L18.392 13.71L20.763 8.001H22.002V15.001H21.047V12.275L21.137 9.333L18.755 15.001H18.023L15.65 9.347L15.745 12.275V15.001H14.79V8.001L16.023 8Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V20C0 22.2091 1.79086 24 4 24H20C22.2091 24 24 22.2091 24 20V4C24 1.79086 22.2091 0 20 0H4ZM4 1C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4C23 2.34315 21.6569 1 20 1H4Z"
        fill="black"
      />
    </svg>
  );
}

export default ATM;
