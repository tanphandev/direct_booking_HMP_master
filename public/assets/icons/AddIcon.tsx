function AddIcon({ width, height, className }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  );
}

export default AddIcon;
