import Image, { StyledImageProps } from "@/components/Image/Image";
import styled from "styled-components";
import ContactList from "../ContactList/ContactList";
import LegalList from "../LegalList/LegalList";
import { VariantProps } from "../../dataStructures/VariantProps/VariantProps";

interface FooterProps extends VariantProps {
  images: StyledImageProps[];
}

export const placeholderIcons: StyledImageProps[] = [
  {
    src: "/placeholder-300-310.jpg",
    width: 20,
    height: 20,
    alt: "placeholder",
    variant: "cropped",
  },
  {
    src: "/placeholder-300-310.jpg",
    width: 20,
    height: 20,
    alt: "placeholder",
    variant: "cropped",
  },
  {
    src: "/placeholder-300-310.jpg",
    width: 20,
    height: 20,
    alt: "placeholder",
    variant: "cropped",
  },
];

const StyledFooter = styled.footer<{
  $variant: VariantProps["variant"];
}>`
  flex-wrap: wrap;
  background-color: ${({ $variant }) =>
    $variant === "bright"
      ? "var(--me-color-white)"
      : "var(--me-color-gray-500)"};
  color: var(-me-text-inverted);
`;

const StyledFooterNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Footer = ({ variant = "dark" }: FooterProps): JSX.Element => {
  return (
    <StyledFooter $variant={variant}>
      <StyledFooterNavigation>
        <ContactList images={placeholderIcons} />
        <LegalList />
      </StyledFooterNavigation>
    </StyledFooter>
  );
};

export default Footer;
