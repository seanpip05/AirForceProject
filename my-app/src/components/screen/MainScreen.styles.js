import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`;

export const ShapeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    gap: 5%;
`;

export const Rectangle = styled.div`
    width: 7%;
    height: 100%;
    background-color: #3498db;
    margin-right: 20px;
`;

export const Circle = styled.div`
    width: 20%;
    height: 60%;
    background-color: #e74c3c;
    border-radius: 50%;
`;

export const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;