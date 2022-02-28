import styled from "styled-components";
import { styles } from "../../GlobalStyle";


export const BackgroundModal = styled.div`
  background:            rgba(18, 18, 20, 0.5);
  position:              fixed;
  z-index:               100;
  top:                   0;
  left:                  0;
  display:               flex;
  align-items:           center;
  justify-content:       center;
  width:                 100vw;
  height:                100vh;
`


export const ModalContainer = styled.div`
  width:                300px;
  padding:              12px 20px;
  background-color:     ${styles.colors.gray3};
  

  @media (min-width: 600px){
    width:              370px;
  }
`

export const ModalHeader = styled.header`
  background-color:     ${styles.colors.gray2};
  font-family:          'Inter';
  display:              flex;
  justify-content:      space-between;
  align-items:          center;
  width:                100%;
  padding:              12px 20px;
  margin-bottom:        20px;
  border-radius:        ${styles.borderRadius};

  h2{
    color:              ${styles.colors.gray0};
    font-weight:        700;
    font-size:          12px;

    @media (min-width: 600px){
      font-size:        16px;
  }
  }
`

export const ModalButtons = styled.div`
  width:                100%;
  display:              flex;
  gap:                  20px;
  justify-content:      space-between;
  align-items:          center;
  margin-bottom:        32px;
`