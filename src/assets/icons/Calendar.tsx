function CalendarIcon({ width, height, color, className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} color={color}>
      <path
        fill="currentColor"
        d="M21.43 3a2.67 2.67 0 0 1 1.821.656A2.04 2.04 0 0 1 24 5.249v16.5a2.04 2.04 0 0 1-.75 1.594 2.67 2.67 0 0 1-1.821.656H2.57a2.67 2.67 0 0 1-1.821-.658A2.04 2.04 0 0 1 0 21.747v-16.5a2.04 2.04 0 0 1 .75-1.591A2.67 2.67 0 0 1 2.571 3h2.572V.562a.51.51 0 0 1 .188-.4.67.67 0 0 1 .455-.164H7.93a.67.67 0 0 1 .455.164.51.51 0 0 1 .187.4V3h6.857V.562a.51.51 0 0 1 .188-.4.67.67 0 0 1 .455-.164h2.143a.67.67 0 0 1 .455.164.51.51 0 0 1 .188.4V3zm-.32 18.748c.08-.004.157-.037.214-.094a.26.26 0 0 0 .107-.187V7.5H2.57v13.966a.26.26 0 0 0 .107.187c.057.057.134.1.214.094z"
      ></path>
    </svg>
  );
}

export default CalendarIcon;
