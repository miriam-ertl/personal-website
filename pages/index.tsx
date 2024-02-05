import Image, { StyledImageProps } from "@/components/Image/Image";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton.styled";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton.styled";
import styled from "styled-components";

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>{content.headline}</h1>
        <PrimaryButton>{content.button}</PrimaryButton>
        <Image
          src={content.image.src}
          width={content.image.width}
          height={content.image.height}
          alt={content.image.alt}
          variant={content.image.variant}
        />
      </section>
      <section>
        <hgroup>
          <p className="miscellaneous">
            {contentTwo.headlineGroup.headlineSmall}
          </p>
          <h2>{contentTwo.headlineGroup.headline}</h2>
        </hgroup>
        <p>{contentTwo.paragraph}</p>
      </section>
      <section>
        <h2>{contentThree.headline}</h2>
        <Image
          src={contentThree.image.src}
          width={contentThree.image.width}
          height={contentThree.image.height}
          alt={contentThree.image.alt}
          variant={contentThree.image.variant}
        />
        <Image
          src={contentThree.image.src}
          width={contentThree.image.width}
          height={contentThree.image.height}
          alt={contentThree.image.alt}
          variant={contentThree.image.variant}
        />
        <Image
          src={contentThree.image.src}
          width={contentThree.image.width}
          height={contentThree.image.height}
          alt={contentThree.image.alt}
          variant={contentThree.image.variant}
        />
        <SecondaryButton>{contentThree.button}</SecondaryButton>
      </section>
    </main>
  );
}

// Definition SECTION ONE

const StyledContent = styled.div`
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

export const content: ContentProps = {
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

// Definition SECTION TWO
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

// Definition SECTION THREE

interface ContentPropsThree {
  headline: string;
  image: StyledImageProps;
  button: string;
  variant: "bright" | "dark";
}

export const contentThree: ContentPropsThree = {
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
};
