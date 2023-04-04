import styled from "styled-components";

export const MainForm = styled.form`
    margin: 0 auto;
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 16px;
    background-color: white;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
`;

export const FormInput = styled.input`
    padding: 8px 12px;
    border: 1px solid lightgrey;
`;

export const FormButton = styled.button`
    padding: 8px 16px;
    background-color: teal;
    color: white;
    border: none;
    transition: 1s;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        background-color: hsl(180, 100%, 30%);
      }
`;