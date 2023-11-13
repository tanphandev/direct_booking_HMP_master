function SubIcon({ width, height, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24">
      <path d="M19 13H5v-2h14v2z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  );
}

export default SubIcon;
