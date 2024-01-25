import styled from "styled-components";

export const PrimaryButton = styled.button`
    display: inline-flex;
    padding: 0.5rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    background: var(--me-color-primary-color-gray-700);
    color: var(--me-text-primary-text-inverted);
    text-align: center;
    font-size: 0.75rem;
    cursor: pointer;

    &:focus {
        border: 2px solid var(--me-color-primary-color-gray-200);
        background: var(--me-color-primary-color-gray-500);
     }

     &:active {
        background: var(--me-color-primary-color-gray-400);
     }
`;
