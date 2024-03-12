import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 20px;
  background-color: var(--me-color-gray-700);
  color: var(-me-text-inverted);
`;

const StyledFooterNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSocialMediaLinksBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSocialMediaLinksBarItem = styled.li`
  padding: 0.5rem;
`;

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
