import styled from "styled-components";
import { VariantProps } from "../../dataStructures/VariantProps/VariantProps";

export const items = [
  {
    name: "Impressum",
  },
  { name: "Datenschutz" },
];

const StyledLegalList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
`;

const StyledLegalListItems = styled.li`
  align-self: center;
  padding: 0.5rem 0.5rem 5rem 0.5rem;
  color: var(--me-text-inverted);
`;

const LegalList = (): JSX.Element => {
  return (
    <StyledLegalList>
      {items.map((item, name) => (
        <StyledLegalListItems key={name} className="miscellaneous">
          {item.name}
        </StyledLegalListItems>
      ))}
    </StyledLegalList>
  );
};

export default LegalList;
