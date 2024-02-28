import Image, { StyledImageProps } from "@/components/Image/Image";

import { Button } from "@/components/Button/Button.styled";
import { VariantProps } from "../../dataStructures/VariantProps/VariantProps";
import styled from "styled-components";

interface SectionTextButtonImageProps extends VariantProps {
  headline: string;
  button: string;
  imageProps: StyledImageProps;
}

const StyledSectionTextButtonImage = styled.section<{
  $variant: VariantProps["variant"];
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ $variant }) =>
    $variant === "bright"
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
  imageProps,
  variant = "bright",
}: SectionTextButtonImageProps) => {
  return (
    <StyledSectionTextButtonImage $variant={variant}>
      <StyledTextButtonContainer>
        <h1>{headline}</h1>
        <Button>{button}</Button>
      </StyledTextButtonContainer>
      <Image
        src={imageProps.src}
        width={imageProps.width}
        height={imageProps.height}
        alt={imageProps.alt}
        variant={imageProps.variant}
      />
    </StyledSectionTextButtonImage>
  );
};

export default SectionTextButtonImage;
