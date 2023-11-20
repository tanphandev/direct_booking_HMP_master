function ParkingOnPremises({ width, height }: { width: string; height: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g id="parking-on-premises" transform="translate(-97 -329)">
        <g
          id="Rectangle_5074"
          data-name="Rectangle 5074"
          transform="translate(97 329)"
          fill="none"
          stroke="#000"
          strokeWidth="0.8"
        >
          <rect width="24" height="24" rx="4" stroke="none" />
          <rect x="0.4" y="0.4" width="23.2" height="23.2" rx="3.6" fill="none" />
        </g>
        <path
          id="Path_7437"
          data-name="Path 7437"
          d="M-4.077-8.265v5.913h-.584v-14H.258a7.5,7.5,0,0,1,2.205.293,4.518,4.518,0,0,1,1.589.827,3.419,3.419,0,0,1,.962,1.288,4.208,4.208,0,0,1,.324,1.678A4.165,4.165,0,0,1,5.02-10.6a3.275,3.275,0,0,1-.957,1.26,4.482,4.482,0,0,1-1.589.8,7.909,7.909,0,0,1-2.216.279Zm0-.519H.258A6.727,6.727,0,0,0,2.3-9.058,3.973,3.973,0,0,0,3.7-9.8a2.852,2.852,0,0,0,.8-1.1,3.551,3.551,0,0,0,.254-1.341A3.815,3.815,0,0,0,4.5-13.64a2.93,2.93,0,0,0-.8-1.139,3.951,3.951,0,0,0-1.4-.769,6.514,6.514,0,0,0-2.043-.284H-4.077Z"
          transform="translate(109.161 350.352)"
          stroke="#000"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
}

export default ParkingOnPremises;
