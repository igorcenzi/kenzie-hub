import styled from "styled-components";
import { styles } from "../../GlobalStyle";

export const StyledDashboardTechs = styled.ul`
  width:                  100%;
  display:                flex;
  flex-direction:         column;
  gap:                    16px;
  justify-content:        flex-start;
  background-color:       ${styles.colors.gray3};
  padding:                22px 8px;
  margin-top:             20px;
  border-radius:          ${styles.borderRadius};
  height:                 400px;
  overflow-y:             scroll;

    ::-webkit-scrollbar {
    width:                4px;            
  }
    ::-webkit-scrollbar-track {
    background:           ${styles.colors.gray4};      
  }

  ::-webkit-scrollbar-thumb {
    background-color:     ${styles.colors.gray0};    
    border-radius:        ${styles.borderRadius};      
    border:               3px solid ${styles.colors.gray4};
  }

  @media (min-width: 600px){
    height:               800px;
  }
`