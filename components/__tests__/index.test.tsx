import { render, screen } from "@testing-library/react";

import SectionTextButtonImage from "../SectionTextButtonImage/SectionTextButtonImage";

describe(SectionTextButtonImage.name, () => {
  it("renders a heading", () => {
    render(
      <SectionTextButtonImage
        headline={"hello"}
        button={"about"}
        image={{
          src: "/placeholder-1920.jpg",
          width: 300,
          height: 300,
          alt: "placeholder",
          variant: "default",
        }}
      />
    );

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
