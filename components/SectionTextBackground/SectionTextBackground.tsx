import styled from "styled-components";

const StyledSectionTextButtonImage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SytledHeadlineGroup = styled.div``;

const StyledParagraph = styled.div``;

interface ContentPropsTwo {
  headlineGroup: { headlineSmall: string; headline: string };
  paragraph: string;
  variant: "bright" | "dark";
}

export const contentTwo: ContentPropsTwo = {
  headlineGroup: {
    headlineSmall: "Eine digitale Reise",
    headline:
      "HTML, CSS, JavaScript im Spiel, Grafiken und Funktionen, mit jedem Ziel. Eine Welt der Möglichkeiten, grenzenlos, wie die Fantasie.",
  },
  paragraph:
    "Mit jeder Zeile Code, wird eine Geschichte erzählt. Von Responsive Design bis zur API-Magie, Eine Welt der Möglichkeiten, grenzenlos, wie die Fantasie.",
  variant: "dark",
};

const SectionTextBackground = (props: ContentPropsTwo) => {
  return (
    <section>
      <hgroup>
        <p className="miscellaneous">
          {contentTwo.headlineGroup.headlineSmall}
        </p>
        <h2>{contentTwo.headlineGroup.headline}</h2>
      </hgroup>
      <p>{contentTwo.paragraph}</p>
    </section>
  );
};

export default SectionTextBackground;
