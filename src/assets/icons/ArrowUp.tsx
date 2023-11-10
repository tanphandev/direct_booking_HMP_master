function ArrowUp({ width, height }: { width: string; height: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d="M7.4 15.4l4.6-4.58 4.6 4.58L18 14l-6-6-6 6z"/>
    </svg>
  );
}

export default ArrowUp;