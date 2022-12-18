import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainerModalWrap = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  background-color: rgba(18, 18, 20, 0.5);

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModal = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  height: fit-content;

  border-radius: 0px 0px 5px 5px;

  transition: width 0.55s, height 0.55s;

  header {
    width: 100%;
    height: 54px;

    padding: 0 15px;
    border-radius: 5px 5px 0px 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-primary);
  }
`;

export const StyledBoxCart = styled.div`
  width: 100%;
  min-height: 160px;

  padding: 20px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-gray-0);
  border-radius: 0px 0px 5px 5px;

  ul {
    width: 100%;
    height: fit-content;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;

    overflow-y: auto;
  }
`;
