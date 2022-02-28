import {styles} from '../../GlobalStyle'
import styled from 'styled-components'

export const StyledButtonPrimary = styled.button`
  font-family:          'Inter';
  font-weight:           500;
  font-size:             16px;
  color:                 ${styles.colors.white};
  background-color:      ${styles.colors.colorPrimary};
  padding:               12px 20px;
  border:                none;
  border-radius:         ${styles.borderRadius};
  width:                 100%;
  transition:            ${styles.transition};
  flex:                  3;

  :hover{
    background-color:    ${styles.colors.colorPrimaryFocus};
  }

  :disabled{
    background-color:    ${styles.colors.colorPrimaryNegative};
  }

  @media (min-width: 600px){
    font-size:           16px;
  }
`

export const StyledButtonSecondary = styled.button`
  font-family:          'Inter';
  font-weight:           500;
  font-size:             16px;
  color:                 ${styles.colors.white};
  background-color:      ${styles.colors.gray1};
  padding:               12px 20px;
  border:                none;
  border-radius:         ${styles.borderRadius};
  width:                 100%;
  transition:            ${styles.transition};
  flex:                  1;

  :hover{
    background-color:    ${styles.colors.gray2};
  }

  @media (min-width: 600px){
    font-size:           16px;
  }
`

export const StyledButtonText = styled.button`
  font-family:          'Inter';
  font-weight:           600;
  font-size:             16px;
  color:                 ${styles.colors.gray0};
  background-color:      ${styles.colors.gray3};
  padding:               4px 16px;
  line-height:           28px;
  border:                none;
  border-radius:         ${styles.borderRadius};
  width:                 100%;
  transition:            ${styles.transition};
  width:                 fit-content;
  text-align:            center;

  :hover{
    background-color:    ${styles.colors.gray2};
  }

  @media (min-width: 600px){
    font-size:           16px;
  }
`