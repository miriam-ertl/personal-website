import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton.styled";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton.styled";

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Headline</h1>
        <img src="pic_trulli.jpg" alt="placeholder"></img>
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
        <img src="pic_trulli.jpg" alt="placeholder"></img>
        <img src="pic_trulli.jpg" alt="placeholder"></img>
        <img src="pic_trulli.jpg" alt="placeholder"></img>
        <SecondaryButton>hello</SecondaryButton>
      </section>
    </main>
  );
}
