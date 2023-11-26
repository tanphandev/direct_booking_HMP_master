function DeleteIcon({ width, height, color, className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} color={color}>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
    </svg>
  );
}

export default DeleteIcon;
