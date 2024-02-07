import SectionTextImagelistButton, {
  placeholderImages,
} from "@/components/SectionTextImagelistButton/SectionTextImagelistButton";

import SectionTextBackground from "@/components/SectionTextBackground/SectionTextBackground";
import SectionTextButtonImage from "@/components/SectionTextButton/SectionTextButtonImage";

export default function HomePage() {
  return (
    <main>
      <SectionTextButtonImage
        headline={"Wo Ideen ihre Reise machen – in der Welt der Codes."}
        button={"About"}
        image={{
          src: "/placeholder-300-310.jpg",
          width: 300,
          height: 300,
          alt: "placeholder",
          variant: "default",
        }}
        variant={"bright"}
      />
      <SectionTextBackground
        headlineGroup={{
          headlineSmall: "Eine digitale Reise",
          headline:
            "HTML, CSS, JavaScript im Spiel, Grafiken und Funktionen, mit jedem Ziel. Eine Welt der Möglichkeiten, grenzenlos, wie die Fantasie.",
        }}
        paragraph={
          "Mit jeder Zeile Code, wird eine Geschichte erzählt. Von Responsive Design bis zur API-Magie, Eine Welt der Möglichkeiten, grenzenlos, wie die Fantasie."
        }
        variant={"dark"}
      />
      <SectionTextImagelistButton
        headline={"Im digitalen Universum"}
        images={placeholderImages}
        button={"Work"}
        variant={"bright"}
      />
    </main>
  );
}

// TODO: Content auslagern
