import Image, { type ImageProps } from "next/image";

export function ImageWithLoader({ alt, ...props }: ImageProps) {
  return <Image alt={alt} {...props} />;
}
