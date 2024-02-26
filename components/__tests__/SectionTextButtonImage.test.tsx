import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import SectionTextButtonImage from "../SectionTextButtonImage/SectionTextButtonImage";

describe(SectionTextButtonImage.name, () => {
  it("renders a heading, a button and an image on bright background", () => {
    render(
      <SectionTextButtonImage
        headline={"hallo"}
        button={"about"}
        image={{
          src: "/placeholder-1920.jpg",
          width: 230,
          height: 230,
          alt: "placeholder",
          variant: "default",
        }}
        variant={"bright"}
      />
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /About/i });
    expect(button).toBeInTheDocument();

    const image = screen.getByAltText(/placeholder/i);
    expect(image).toHaveAttribute("alt");
  });
  it("renders a heading, a button and a cropped image on dark background", () => {
    render(
      <SectionTextButtonImage
        headline={"hallo"}
        button={"about"}
        image={{
          src: "/placeholder-1920.jpg",
          width: 230,
          height: 230,
          alt: "placeholder",
          variant: "cropped",
        }}
        variant={"dark"}
      />
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /About/i });
    expect(button).toBeInTheDocument();

    const image = screen.getByAltText(/placeholder/i);
    expect(image).toHaveAttribute("alt");
  });
});