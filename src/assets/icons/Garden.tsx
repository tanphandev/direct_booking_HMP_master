function Garden({ width, height }: { width: string; height: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g id="garden" transform="translate(-0.004 0)">
        <path id="Path_7469" data-name="Path 7469" d="M18.2,23.226H10.455v-3.1h8.516a.387.387,0,0,0,.352-.549L10.42.226a.387.387,0,0,0-.7,0L.814,19.58a.387.387,0,0,0,.352.549H9.681v3.1H.391a.387.387,0,0,0,0,.774H18.2a.387.387,0,0,0,0-.774ZM1.77,19.355l8.3-18.041,8.3,18.041H10.455V16.806L12.665,14.6a.387.387,0,0,0-.547-.547l-1.662,1.662V12a.387.387,0,1,0-.774,0v4.872L7.245,14.436a.387.387,0,0,0-.547.547l2.983,2.983v1.388Zm0,0" transform="translate(0 0)" fill="#231f20" />
        <path id="Path_7470" data-name="Path 7470" d="M264.395,265.263a.386.386,0,0,0,.274-.113l.387-.387a.387.387,0,0,0-.547-.547l-.387.387a.387.387,0,0,0,.274.661Zm0,0" transform="translate(-251.23 -251.328)" fill="#231f20" />
        <path id="Path_7471" data-name="Path 7471" d="M392.778,480.008h-.387a.387.387,0,1,0,0,.774h.387a.387.387,0,1,0,0-.774Zm0,0" transform="translate(-373.033 -456.782)" fill="#231f20" />
      </g>
    </svg>
  );
}

export default Garden;