import { VariantProps } from "../../dataStructures/VariantProps/VariantProps";
import styled from "styled-components";

const StyledSectionTextBackground = styled.section<{
  $variant: VariantProps["variant"];
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ $variant }) =>
    $variant === "dark" ? "var(--me-color-gray-500)" : "var(--me-color-white)"};
  color: ${({ $variant }) =>
    $variant === "dark"
      ? "var(--me-text-inverted)"
      : "var(--me-text-gray-700)"};
`;

const StyledHeadlineGroup = styled.div`
  justify-content: flex-end;
  align-self: flex-end;
  padding: 0.5rem 1rem 5rem 0.5rem;
`;

const StyledParagraph = styled.p`
  justify-content: flex-end;
  align-self: flex-end;
  max-width: 50%;
  min-width: 5rem;
  padding: 0.5rem 1rem 5rem 0.5rem;
`;

interface SectionTextBackgroundProps extends VariantProps {
  headlineGroup: { headlineSmall: string; headline: string };
  paragraph: string;
}

const SectionTextBackground = ({
  headlineGroup,
  paragraph,
  variant = "dark",
}: SectionTextBackgroundProps) => {
  return (
    <StyledSectionTextBackground $variant={variant}>
      <StyledHeadlineGroup>
        <h6 className="miscellaneous">{headlineGroup.headlineSmall}</h6>
        <h2>{headlineGroup.headline}</h2>
      </StyledHeadlineGroup>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </StyledSectionTextBackground>
  );
};

export default SectionTextBackground;
