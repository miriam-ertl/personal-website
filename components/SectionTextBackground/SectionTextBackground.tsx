import { VariantProps } from "../../dataStructures/VariantProps/VariantProps";
import styled from "styled-components";

const StyledSectionTextBackground = styled.section<VariantProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "dark" ? "var(--me-color-gray-500)" : "var(--me-color-white)"};
  color: ${({ variant }) =>
    variant === "dark" ? "var(--me-text-inverted)" : "var(--me-text-gray-700)"};
`;

const StyledHeadlineGroup = styled.div`
  justify-content: flex-end;
  align-self: flex-end;
  padding-bottom: 5rem;
  margin: 0.5rem;
`;

const StyledParagraph = styled.p`
  justify-content: flex-end;
  align-self: flex-end;
  padding-left: 16rem;
  padding-bottom: 5rem;
  margin-right: 5rem;
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
    <StyledSectionTextBackground variant={variant}>
      <StyledHeadlineGroup>
        <h6 className="miscellaneous">{headlineGroup.headlineSmall}</h6>
        <h2>{headlineGroup.headline}</h2>
      </StyledHeadlineGroup>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </StyledSectionTextBackground>
  );
};

export default SectionTextBackground;

// TODO: Content auslagern

// KEEP THIS FOR LATER
/*export const contentTwo: ContentPropsTwo = {
  headlineGroup: {
    headlineSmall: "Eine digitale Reise",
    headline:
      "HTML, CSS, JavaScript im Spiel, Grafiken und Funktionen, mit jedem Ziel. Eine Welt der Möglichkeiten, grenzenlos, wie die Fantasie.",
  },
  paragraph:
    "Mit jeder Zeile Code, wird eine Geschichte erzählt. Von Responsive Design bis zur API-Magie, Eine Welt der Möglichkeiten, grenzenlos, wie die Fantasie.",
  variant: "dark",
};*/
