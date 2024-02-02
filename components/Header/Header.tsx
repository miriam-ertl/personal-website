import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  background-color: var(--me-color-white);
  color: var(--me-text-gray-700);
`;

const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
