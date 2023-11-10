function PersonIcon({ width, height, color, className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width} height={height} color={color}>
      <path
        fill="currentColor"
        d="M12 12a6 6 0 1 0 0-12 6 6 0 0 0-4.243 10.243 6 6 0 0 0 4.243 1.757zm0 3c-4.05 0-12 1.95-12 6v3h24v-3c.001-4.05-7.95-6-12-6z"
      ></path>
    </svg>
  );
}

export default PersonIcon;
