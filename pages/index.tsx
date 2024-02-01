import Image from "@/components/Image/Image";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton.styled";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton.styled";

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Wo Ideen ihre Reise machen – in der Welt der Codes.</h1>
        <Image
          src="/placeholder-300-310.jpg"
          width={300}
          height={310}
          alt="placeholder"
          variant="default"
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
