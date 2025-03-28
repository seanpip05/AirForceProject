import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px;
    width: 5%;
    border: solid 1.5px;
    border-radius: 20px;
    background-color:rgb(123, 217, 139);

`;

export const ShapeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    gap: 5%;
`;