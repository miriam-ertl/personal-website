import { Variant } from "../Variant/Variant";
import styled from "styled-components";

const StyledSectionTextbackground = styled.section<Variant>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "dark" ? "var(--me-color-gray-500)" : "var(--me-color-white)"};
  color: ${({ variant }) =>
    variant === "dark" ? "var(--me-text-inverted)" : "var(--me-text-gray-700)"};
`;

const StlyedHeadlineGroup = styled.div`
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

interface ContentPropsTwo extends Variant {
  headlineGroup: { headlineSmall: string; headline: string };
  paragraph: string;
  variant: "bright" | "dark";
}

const SectionTextBackground = ({
  headlineGroup,
  paragraph,
  variant = "dark",
}: ContentPropsTwo) => {
  return (
    <StyledSectionTextbackground variant={variant}>
      <StlyedHeadlineGroup>
        <h6 className="miscellaneous">{headlineGroup.headlineSmall}</h6>
        <h2>{headlineGroup.headline}</h2>
      </StlyedHeadlineGroup>
      <StyledParagraph>
        <p>{paragraph}</p>
      </StyledParagraph>
    </StyledSectionTextbackground>
  );
};

export default SectionTextBackground;

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
