import Image, { StyledImageProps } from "@/components/Image/Image";

import { PrimaryButton } from "../PrimaryButton/PrimaryButton.styled";
import styled from "styled-components";

const StyledSectionTextButtonImage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

interface ContentProps {
  headline: string;
  button: string;
  image: StyledImageProps;
  variant: "bright" | "dark";
}

const content: ContentProps = {
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
};

const SectionTextButtonImage = ({
  headline,
  button,
  image,
  variant,
}: ContentProps) => {
  return (
    <StyledSectionTextButtonImage>
      <h1>{content.headline}</h1>
      <PrimaryButton>{content.button}</PrimaryButton>
      <Image
        src={content.image.src}
        width={content.image.width}
        height={content.image.height}
        alt={content.image.alt}
        variant={content.image.variant}
      />
    </StyledSectionTextButtonImage>
  );
};

export default SectionTextButtonImage;
