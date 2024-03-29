import { render, screen } from "@testing-library/react";

import Button from "@/components/Button/Button";

describe(Button.name, () => {
  it("renders a button", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
