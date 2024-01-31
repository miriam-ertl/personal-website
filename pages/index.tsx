import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton.styled";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton.styled";
import { StyledCroppedImage } from "@/components/Images/Images.styled";
import { StyledImage } from "@/components/Images/Images.styled";

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Headline</h1>
        <StyledImage
          src="../src/placeholder-300x310.jpg"
          width={300}
          height={310}
          alt="placeholder"
        />
        <PrimaryButton>hello</PrimaryButton>
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
        <StyledCroppedImage>
          <StyledImage
            src="../src/placeholder-148x148.jpg"
            width={148}
            height={148}
            alt="placeholder"
          />
          <StyledImage
            src="../src/placeholder-148x148.jpg"
            width={148}
            height={148}
            alt="placeholder"
          />
          <StyledImage
            src="../src/placeholder-148x148.jpg"
            width={148}
            height={148}
            alt="placeholder"
          />
        </StyledCroppedImage>
        <SecondaryButton>hello</SecondaryButton>
      </section>
    </main>
  );
}
