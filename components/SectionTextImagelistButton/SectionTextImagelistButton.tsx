import Image, { StyledImageProps } from "@/components/Image/Image";

import ImageList from "../ImageList/ImageList";
import { SecondaryButton } from "../SecondaryButton/SecondaryButton.styled";
import { Variant } from "../Variant/Variant";
import styled from "styled-components";

interface ContentPropsThree extends Variant {
  headline: string;
  images: StyledImageProps[];
  button: string;
  variant: "bright" | "dark";
}

export const placeholderImages: StyledImageProps[] = [
  {
    src: "/placeholder-300-310.jpg",
    width: 148,
    height: 148,
    alt: "placeholder",
    variant: "cropped",
  },
  {
    src: "/placeholder-300-310.jpg",
    width: 148,
    height: 148,
    alt: "placeholder",
    variant: "cropped",
  },
  {
    src: "/placeholder-300-310.jpg",
    width: 148,
    height: 148,
    alt: "placeholder",
    variant: "cropped",
  },
];

const StyledSectionTextImagelistButton = styled.section<Variant>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "bright"
      ? "var(--me-color-white)"
      : "var(--me-color-gray-500)"};
`;

const SectionTextImagelistButton = ({
  headline,
  images,
  button,
  variant = "bright",
}: ContentPropsThree) => {
  return (
    <StyledSectionTextImagelistButton variant={variant}>
      <h2>{headline}</h2>
      <ImageList images={images} />
      <SecondaryButton>{button}</SecondaryButton>
    </StyledSectionTextImagelistButton>
  );
};

export default SectionTextImagelistButton;

//KEEP THIS FOR LATER
/*export const contentThree: ContentPropsThree = {
  headline: "Im digitalen Universum",
  image: {
    src: "/placeholder-148-148.jpg",
    width: 148,
    height: 148,
    alt: "placeholder",
    variant: "cropped",
  },
  button: "Work",
  variant: "bright",
};*/
