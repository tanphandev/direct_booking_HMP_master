function Elevator({ width, height }: { width: string; height: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g id="elevator" transform="translate(0 0)">
    <path id="Path_7579" data-name="Path 7579" d="M19.807,0H2.31A2.3,2.3,0,0,0,0,2.315V23.668A.316.316,0,0,0,.326,24H21.791a.316.316,0,0,0,.325-.331V2.315A2.3,2.3,0,0,0,19.807,0ZM4.86,23.305V4.016h5.851V23.305Zm6.545,0V4.016h5.851V23.305Zm10.016,0H17.951V3.666a.331.331,0,0,0-.331-.344H4.5a.331.331,0,0,0-.331.344V23.305H.695V2.315A1.607,1.607,0,0,1,2.31.694h17.5a1.606,1.606,0,0,1,1.615,1.621Zm0,0" transform="translate(0 0)"/>
    <path id="Path_7580" data-name="Path 7580" d="M374.522,140a.347.347,0,0,0-.491,0l-.839.839a.347.347,0,1,0,.491.491l.247-.246v1.4a.347.347,0,1,0,.694,0v-1.4l.246.247a.347.347,0,0,0,.491-.491Zm0,0" transform="translate(-354.59 -132.958)"/>
    <path id="Path_7581" data-name="Path 7581" d="M374.869,221.51l-.247.246v-1.409a.347.347,0,1,0-.694,0v1.409l-.246-.246a.347.347,0,0,0-.491.491l.839.839a.347.347,0,0,0,.491,0l.839-.839a.347.347,0,0,0-.491-.491Zm0,0" transform="translate(-354.589 -209.091)"/>
  </g>
    </svg>
  );
}

export default Elevator;