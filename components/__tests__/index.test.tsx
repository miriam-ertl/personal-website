import { render, screen } from "@testing-library/react";

import SectionTextButtonImage from "@/components/SectionTextButtonImage/SectionTextButtonImage";

describe(SectionTextButtonImage.name, () => {
  it("renders a heading, a button and an image", () => {
    render(
      <SectionTextButtonImage
        headline={"hallo"}
        button={"about"}
        imageProps={{
          src: "/placeholder-1920.jpg",
          width: 230,
          height: 230,
          alt: "placeholder",
          variant: "default",
        }}
      />
    );
    const heading = screen.getByRole("heading", { level: 1, name: "hallo" });
    expect(heading).toBeInTheDocument();

    const button = screen.getByText(/about/i);
    expect(button).toBeInTheDocument();

    const image = screen.getByAltText(/placeholder/i);
    expect(image).toHaveAttribute("alt");
  });
});
