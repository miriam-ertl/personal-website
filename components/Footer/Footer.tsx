import Image, { StyledImageProps } from "@/components/Image/Image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { VariantProps } from "../../dataStructures/VariantProps/VariantProps";

const StyledFooter = styled.footer<{
  $variant: VariantProps["variant"];
}>`
  padding: 20px;
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

const StyledContactList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledContactListItems = styled.li`
  padding: 0.5rem;
`;

const StyledLegalList = styled.ul`
  padding: 0.5rem;
`;

const StyledLegalListItems = styled.li`
  padding: 0.5rem;
`;

const Footer = () => {
  return (
    <StyledFooter $variant="dark">
      <StyledFooterNavigation>
        <StyledContactList>
          <StyledContactListItems></StyledContactListItems>
        </StyledContactList>
        <StyledLegalList>
          <StyledLegalListItems></StyledLegalListItems>
        </StyledLegalList>
      </StyledFooterNavigation>
    </StyledFooter>
  );
};

export default Footer;

// const contactItems = [
//   {
//     name: "LinkedIn",
//   },
//   { name: "Github" },
//   { name: "Email" },
// ];

//   images,
//   variant = "dark",
// } : FooterProps) => {
//   const listItems = contactItems.map(contactItem) =>
//     <li key={contactItem.name}>
//       <img src={getImageUrl(contactItem)} alt={contactItem.name} />
//       <p>{contactItem.name}</p>
//     </li>
//   ;
//   return (
//     <>
//     <StyledFooter $variant={variant}>
//     <ul>{listItems}</ul>
//     </StyledFooter>
//     </>);
// }
