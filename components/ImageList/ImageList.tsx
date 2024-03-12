import Image, { StyledImageProps } from "@/components/Image/Image";

import styled from "styled-components";

const StyledImageList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const StyledImageListItem = styled.li`
  padding: 0.5rem;
`;

const ImageList = ({ images }: { images: StyledImageProps[] }): JSX.Element => (
  <StyledImageList>
    {images.map((image, src) => (
      <StyledImageListItem key={src}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          variant={image.variant}
          priority={image.priority}
        />
      </StyledImageListItem>
    ))}
  </StyledImageList>
);

export default ImageList;
