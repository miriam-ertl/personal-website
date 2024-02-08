import NextImage, * as image from "next/image";

import styled from "styled-components";

const StyledCroppedImage = styled(NextImage)`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

const StyledImage = styled(NextImage)`
  display: inline;
  width: auto;
  margin: 0;
  padding-bottom: 0.5rem;
  object-fit: cover;
`;

export interface StyledImageProps extends image.ImageProps {
  variant: "cropped" | "default";
}

const Image = ({ src, width, height, alt, variant }: StyledImageProps) => {
  if (variant === "cropped") {
    return (
      <StyledCroppedImage src={src} width={width} height={height} alt={alt} />
    );
  }

  return <StyledImage src={src} width={width} height={height} alt={alt} />;
};

export default Image;

// TODO: default für Image einrichten
