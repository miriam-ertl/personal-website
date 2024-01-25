import styled from "styled-components";

export const SecondaryButton = styled.button`
    display: inline-flex;
    padding: 0.5rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border: 1px solid var(--me-color-primary-color-gray-700);
    background: var(--me-color-primary-color-white);
    color: var(--me-text-primary-text-gray-700);
    text-align: center;
    font-size: 0.75rem;

     &:focus {
        color: var(--me-text-primary-text-inverted);
        border: 2px solid var(--me-color-primary-color-gray-200);
        background: var(--me-color-primary-color-gray-500);
     }

     &:active {
        color: var(--me-text-primary-text-inverted);
        background: var(--me-color-primary-color-gray-400);
     }
     
`;
