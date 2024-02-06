import { Variant } from "../Variant/Variant";
import styled from "styled-components";

const StyledSectionTextbackground = styled.section<Variant>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ variant }) =>
    variant === "dark" ? "var(--me-color-gray-700)" : "var(--me-color-white)"};
  color: ${({ variant }) =>
    variant === "dark" ? "var(--me-text-inverted)" : "var(--me-text-gray-700)"};
`;
const SytledHeadlineGroup = styled.div``;

const StyledParagraph = styled.div``;

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
      <p className="miscellaneous">{headlineGroup.headlineSmall}</p>
      <h2>{headlineGroup.headline}</h2>
      <p>{paragraph}</p>
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
