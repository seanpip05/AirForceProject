import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PopupContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 50vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 20%;
    padding: 10px;
    margin-bottom: 10px;
    align-items: center;
`;

export const LeftBox = styled.div`
    padding: 10px;
    border: 1px solid black;
    width: 20%;
    text-align: center;
`;

export const RightInput = styled.input`
    background-color: lightgray;
    padding: 10px;
    width: 60%;
    border: 1px solid black;
`;

export const Button = styled.button`
  margin-top: 1%;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  border: none;
  color: #333;
  width: 65%;
  height: 20%;
  transform: scale(1.5);
  position: relative; /* To position the text inside the arrow */
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 10%;
    height: 100%;
  }

  span {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    margin-right: 4%;
  }
`;