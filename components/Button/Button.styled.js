import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: ${(props) =>
    props.$secondary ? "1px solid var(--me-color-gray-700)" : "0"};
  background: ${(props) =>
    props.$secondary ? "var(--me-color-white)" : "var(--me-color-gray-700)"};
  color: ${(props) =>
    props.$secondary ? "var(--me-text-gray-700)" : "var(--me-text-inverted)"};
  text-align: center;
  font-size: 0.75rem;
  cursor: pointer;

  &:focus {
    color: ${(props) =>
      props.$secondary ? "var(--me-text-inverted)" : "var(--me-text-inverted)"};
    border: 2px solid var(--me-color-gray-200);
    background: var(--me-color-gray-500);
  }

  &:active {
    background: var(--me-color-gray-400);
    color: ${(props) =>
      props.$secondary ? "var(--me-text-inverted)" : "var(--me-text-inverted)"};
  }
`;
