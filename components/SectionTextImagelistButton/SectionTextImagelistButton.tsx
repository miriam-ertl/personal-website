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

const StyledSectionTextImagelistButton = styled.section<Variant>`
  flex-wrap: wrap;
  background-color: ${({ variant }) =>
    variant === "bright"
      ? "var(--me-color-white)"
      : "var(--me-color-gray-500)"};
`;

const StlyedHeadline = styled.div`
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
}: ContentPropsThree) => {
  return (
    <StyledSectionTextImagelistButton variant={variant}>
      <StlyedHeadline>
        <h2>{headline}</h2>
      </StlyedHeadline>
      <StyledImageListButton>
        <ImageList images={images} />
        <SecondaryButton>{button}</SecondaryButton>
      </StyledImageListButton>
    </StyledSectionTextImagelistButton>
  );
};

export default SectionTextImagelistButton;

// TODO: Content auslagern
// TODO: type-Doppelungen placeholderImages entnehmen

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
