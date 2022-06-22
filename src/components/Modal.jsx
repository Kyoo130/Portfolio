import React from "react";
import styled from "styled-components";

const ModalCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 5rem;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  opacity: 1;
  z-index: 10;
  & > h1 {
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0;
  }
  & > button {
    background-color: #bdbdbd;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    margin-bottom: 2rem;
  }
`;

const Modal = ({ openModalEvent }) => {
  const onClick = () => {
    console.log("모달 동작");
    openModalEvent(false);
  };

  return (
    <ModalCont>
      <ModalContents>
        <h1>Modal</h1>
        <button onClick={onClick}>모달끄기</button>
      </ModalContents>
    </ModalCont>
  );
};

export default Modal;
