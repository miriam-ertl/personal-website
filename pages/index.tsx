import Image, { StyledImageProps } from "@/components/Image/Image";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton.styled";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton.styled";

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
          <p className="miscellaneous">Eine digitale Reise</p>
          <h2>
            HTML, CSS, JavaScript im Spiel, Grafiken und Funktionen, mit jedem
            Ziel. Eine Welt der Möglichkeiten, grenzenlos, wie die Fantasie.
          </h2>
        </hgroup>
        <p>
          Mit jeder Zeile Code, wird eine Geschichte erzählt. Von Responsive
          Design bis zur API-Magie, Eine Welt der Möglichkeiten, grenzenlos, wie
          die Fantasie.
        </p>
      </section>
      <section>
        <h2>Im digitalen Universum</h2>
        <Image
          src="/placeholder-148-148.jpg"
          width={148}
          height={148}
          alt="placeholder"
          variant="cropped"
        />
        <Image
          src="/placeholder-148-148.jpg"
          width={148}
          height={148}
          alt="placeholder"
          variant="cropped"
        />
        <Image
          src="/placeholder-148-148.jpg"
          width={148}
          height={148}
          alt="placeholder"
          variant="cropped"
        />
        <SecondaryButton>hello</SecondaryButton>
      </section>
    </main>
  );
}

interface ContentProps {
  headline: string;
  button: string;
  image: StyledImageProps;
  variant: "bright" | "dark";
}

export const content: ContentProps = {
  headline: "Wo Ideen ihre Reise machen – in der Welt der Codes.",
  button: "hello",
  image: {
    src: "/placeholder-300-310.jpg",
    width: 300,
    height: 310,
    alt: "placeholder",
    variant: "default",
  },
  variant: "bright",
};

interface ContentProps2 {
  headlinegroup: { headline: string; headlinesmall: string };
  parapgraph: string;
}

export const content2: ContentProps2 = {};
