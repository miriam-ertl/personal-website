import Image, { StyledImageProps } from "@/components/Image/Image";

import { Button } from "@/components/Button/Button.styled";
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
        <Button>{button}</Button>
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
