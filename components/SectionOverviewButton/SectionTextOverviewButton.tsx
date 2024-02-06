import Image, { StyledImageProps } from "@/components/Image/Image";

import { SecondaryButton } from "../SecondaryButton/SecondaryButton.styled";
import { Variant } from "../Variant/Variant";
import styled from "styled-components";

interface ContentPropsThree extends Variant {
  headline: string;
  imageGroup: {
    imageOne: StyledImageProps;
    imageTwo: StyledImageProps;
    imageThree: StyledImageProps;
  };
  button: string;
  variant: "bright" | "dark";
}

const StyledSectionTextOverviewButton = styled.section<Variant>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "bright"
      ? "var(--me-color-white)"
      : "var(--me-color-gray-500)"};
`;

const SectionTextOverviewButton = ({
  headline,
  imageGroup,
  button,
  variant = "bright",
}: ContentPropsThree) => {
  return (
    <section>
      <h2>{headline}</h2>
      <Image
        src={imageGroup.imageOne.src}
        width={imageGroup.imageOne.width}
        height={imageGroup.imageOne.height}
        alt={imageGroup.imageOne.alt}
        variant={imageGroup.imageOne.variant}
      />
      <Image
        src={imageGroup.imageTwo.src}
        width={imageGroup.imageTwo.width}
        height={imageGroup.imageTwo.height}
        alt={imageGroup.imageTwo.alt}
        variant={imageGroup.imageTwo.variant}
      />
      <Image
        src={imageGroup.imageThree.src}
        width={imageGroup.imageThree.width}
        height={imageGroup.imageThree.height}
        alt={imageGroup.imageThree.alt}
        variant={imageGroup.imageThree.variant}
      />
      <SecondaryButton>{button}</SecondaryButton>
    </section>
  );
};

export default SectionTextOverviewButton;

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
