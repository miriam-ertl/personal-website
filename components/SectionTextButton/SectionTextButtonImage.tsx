import Image, { StyledImageProps } from "@/components/Image/Image";

import { PrimaryButton } from "../PrimaryButton/PrimaryButton.styled";
import { VariantProps } from "../../dataStructures/VariantProps/VariantProps";
import styled from "styled-components";

interface SectionTextButtonImageProps extends VariantProps {
  headline: string;
  button: string;
  image: StyledImageProps;
}

const StyledSectionTextButtonImage = styled.section<VariantProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "bright"
      ? "var(--me-color-white)"
      : "var(--me-color-gray-500)"};
`;

const StyledTextButtonContainer = styled.div`
  justify-content: flex-end;
  align-self: flex-end;
  padding-left: 16rem;
  padding-bottom: 5rem;
`;

const SectionTextButtonImage = ({
  headline,
  button,
  image,
  variant = "bright",
}: SectionTextButtonImageProps) => {
  return (
    <StyledSectionTextButtonImage variant={variant}>
      <StyledTextButtonContainer>
        <h1>{headline}</h1>
        <PrimaryButton>{button}</PrimaryButton>
      </StyledTextButtonContainer>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        variant={image.variant}
      />
    </StyledSectionTextButtonImage>
  );
};

export default SectionTextButtonImage;

// TODO: Content auslagern

// KEEP THIS FOR LATER
/*const content: ContentProps = {
  headline: "Wo Ideen ihre Reise machen – in der Welt der Codes.",
  button: "About",
  image: {
    src: "/placeholder-300-310.jpg",
    width: 300,
    height: 310,
    alt: "placeholder",
    variant: "default",
  },
  variant: "bright",
};*/
