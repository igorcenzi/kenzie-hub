import styled from "styled-components";
import { styles } from "../../GlobalStyle";

export const StyledTech = styled.li`
  width:              100%;
  display:            flex;
  justify-content:    space-between;
  align-items:        center;
  padding:            12px;
  font-family:        'Inter';
  background-color:   ${styles.colors.gray4};
  border-radius:      ${styles.borderRadius};
  cursor:             pointer;

  .tech-title{
    font-weight:      700;
    font-size:        14px;
    color:            ${styles.colors.gray0};
  }

  .tech-level{
    font-weight:      400;
    font-size:        12px;
    color:            ${styles.colors.gray1};
  }

  :hover{
    background-color: ${styles.colors.gray2};
  }

  :hover .tech-level{
    color:            ${styles.colors.gray0};
  }
`