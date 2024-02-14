import Image, { StyledImageProps } from "@/components/Image/Image";

import { Button } from "../Button/Button.styled";
import ImageList from "../ImageList/ImageList";
import { VariantProps } from "@/dataStructures/VariantProps/VariantProps";
import styled from "styled-components";

interface SectionTextImagelistButtonProps extends VariantProps {
  headline: string;
  images: StyledImageProps[];
  button: string;
}

export const placeholderImages: StyledImageProps[] = [
  {
    src: "/placeholder-300-310.jpg",
    width: 200,
    height: 200,
    alt: "placeholder",
    variant: "cropped",
  },
  {
    src: "/placeholder-300-310.jpg",
    width: 200,
    height: 200,
    alt: "placeholder",
    variant: "cropped",
  },
  {
    src: "/placeholder-300-310.jpg",
    width: 200,
    height: 200,
    alt: "placeholder",
    variant: "cropped",
  },
];

const StyledSectionTextImagelistButton = styled.section<VariantProps>`
  flex-wrap: wrap;
  background-color: ${({ variant }) =>
    variant === "bright"
      ? "var(--me-color-white)"
      : "var(--me-color-gray-500)"};
`;

const StyledHeadline = styled.div`
  align-self: flex-start;
  padding-bottom: 5rem;
  margin: 0.5rem;
`;

const StyledImageListButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

const SectionTextImagelistButton = ({
  headline,
  images,
  button,
  variant = "bright",
}: SectionTextImagelistButtonProps) => {
  return (
    <StyledSectionTextImagelistButton variant={variant}>
      <StyledHeadline>
        <h2>{headline}</h2>
      </StyledHeadline>
      <StyledImageListButton>
        <ImageList images={images} />
        <Button $secondary>{button}</Button>
      </StyledImageListButton>
    </StyledSectionTextImagelistButton>
  );
};

export default SectionTextImagelistButton;
