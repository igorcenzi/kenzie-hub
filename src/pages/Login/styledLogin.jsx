import styled from "styled-components";
import {styles} from '../../GlobalStyle'

const StyledLogin = styled.main`
  display:                    flex;
  flex-direction:             column;
  align-items:                center;
  justify-content:            center;
  gap:                        20px;
  width:                      100%;
  margin:                     0 auto;
  box-sizing:                 border-box;

  .form-container{
    width:                    100%;
    background-color:         ${styles.colors.gray3};
    padding:                  32px 12px;
    border-radius:            ${styles.borderRadius};
  }

  h1{
    font-family:              'Inter';
    font-weight:              700;
    font-size:                16px;
    text-align:               center;
    color:                    ${styles.colors.gray0};
    margin-bottom:            24px;
  }

  .login-newAccount{
    font-family:              'Inter';
    font-weight:              600;
    font-size:                10px;
    text-align:               center;
    color:                    ${styles.colors.gray1};
    margin-top:               28px;
    margin-bottom:            16px;
  }

  @media (min-width: 600px){
    h1{
      font-size:                20px;
    }

    img{
      width: 144px;
    }

    .login-newAccount{
      font-size:                14px;
    }
  }

`

export default StyledLogin