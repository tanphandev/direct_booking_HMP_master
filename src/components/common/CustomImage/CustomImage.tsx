import Image, { StaticImageData } from 'next/image';
type Props = {
  className: string;
  style?: any;
  src: string | StaticImageData;
  alt: string;
  fallback: string;
  width?: number;
  height?: number;
  priority?: boolean;
  [x: string]: any;
  onClick?: () => void;
};
function CustomImage({
  className,
  style,
  src,
  alt,
  priority = true,
  fallback,
  width = 0,
  height = 0,
  onClick,
  ...props
}: Props) {
  return (
    <Image
      priority={priority}
      onClick={onClick}
      className={className}
      style={style}
      src={src || fallback}
      alt={alt}
      width={width}
      height={height}
      sizes="100vw"
      objectFit="cover"
      {...props}
    />
  );
}

export default CustomImage;
