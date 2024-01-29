import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton.styled.js";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton.styled.js";

export default function HomePage() {
  return (
    <main>
      <h1>Wo Ideen ihre Reise machen – in der Welt der Codes.</h1>
      <h2>Wo Ideen ihre Reise machen – in der Welt der Codes.</h2>
      <h3>Wo Ideen ihre Reise machen – in der Welt der Codes.</h3>
      <h4>Wo Ideen ihre Reise machen – in der Welt der Codes.</h4>
      <h5>Wo Ideen ihre Reise machen – in der Welt der Codes.</h5>
      <section>
        <div>Wo Ideen ihre Reise machen – in der Welt der Codes.</div>
        <div className="miscellaneous">
          Wo Ideen ihre Reise machen – in der Welt der Codes.
        </div>
        <div className="copyright">
          Wo Ideen ihre Reise machen – in der Welt der Codes.
        </div>
      </section>
      <PrimaryButton>About</PrimaryButton>
      <SecondaryButton>Work</SecondaryButton>
    </main>
  );
}
