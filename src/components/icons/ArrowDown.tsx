function ArrowDown({ width, height, color }: { width: string; height: string ;color:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}  
      width={height}
      // preserveAspectRatio="xMidYMid meet"
      focusable="false"
    >
      <path d="M7.4 8.6l4.6 4.58 4.6-4.58L18 10l-6 6-6-6 1.4-1.4z"
        fill={color}
      >
      </path>
    </svg>
  );
}

export default ArrowDown;
