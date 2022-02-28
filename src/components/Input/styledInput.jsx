import styled from "styled-components";
import {styles} from '../../GlobalStyle'

const StyledInput = styled.div`
  width:                    100%;
  display:                  flex;
  flex-direction:           column;
  
    p{
      font-family:          'Inter';
      font-weight:          400;
      font-size:            12px;
      text-align:           left;
      color:                ${props => props.error ? styles.colors.colorNegative : styles.colors.gray0};
      margin-bottom:        16px;
    }

    div{
      position:             relative;
      width:                100%;
      margin-bottom:        20px;

      svg{
      position:             absolute;
      right:                20px;
      top:                  12px;
    }
    input, select, option, select *{
      font-family:          'Inter';
      font-weight:          400;
      font-size:            16px;
      color:                ${styles.colors.gray0};
      background-color:     ${styles.colors.gray2};
      padding:              8px 16px;
      border-radius:        ${styles.borderRadius};
      border:               2px solid ${props => props.error ? styles.colors.colorNegative : "transparent"};
      transition:           ${styles.transition};
      width:                100%;
      

      :focus &{
        border-color:       ${props => props.error ? styles.colors.colorNegative : styles.colors.gray0};
      }

      ::placeholder{
        color:              ${styles.colors.gray1};
        transition:         ${styles.transition};
        opacity:            1;
      }

      :focus::placeholder{
        color:              ${styles.colors.gray0};
        opacity:            0;
      }
    }
  }

    span{
      font-family:          'Inter';
      font-weight:          400;
      font-size:            10px;
      margin-top:           20px;
      color:                ${props => props.error ? styles.colors.colorNegative : styles.colors.gray1};
    }

    @media (min-width: 600px){
      p{
        font-size:          16px;
      }

      span{
        font-size:          14px;
      }

      input{
        font-size:          20px;
      }

    }
`

export default StyledInput