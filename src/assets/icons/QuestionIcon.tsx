function QuestionIcon({ width, height, color, className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      color={color}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M222.909,343.22a1.258,1.258,0,0,0,0,2.516,1.258,1.258,0,0,0,0-2.516Z"
        transform="translate(-211.276 -327.132)"
      ></path>
      <path
        d="M187.241,140c-2.206,0-3.219,1.307-3.219,2.189a.937.937,0,0,0,.98.931c.882,0,.523-1.258,2.189-1.258.817,0,1.471.359,1.471,1.111,0,.882-.915,1.389-1.454,1.846a2.991,2.991,0,0,0-1.095,2.484c0,.85.229,1.095.9,1.095.8,0,.964-.359.964-.67a2.052,2.052,0,0,1,.915-2.042,4.182,4.182,0,0,0,1.83-2.99C190.721,141.162,189.332,140,187.241,140Z"
        transform="translate(-175.396 -133.439)"
      ></path>
      <path d="M12,0A11.993,11.993,0,0,0,0,12V23.063A.937.937,0,0,0,.938,24H12A12,12,0,0,0,12,0Zm0,22.125H1.875V12A10.125,10.125,0,1,1,12,22.125Z"></path>
    </svg>
  );
}

export default QuestionIcon;
