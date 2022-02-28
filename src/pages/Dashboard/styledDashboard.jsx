import styled from "styled-components";
import { styles } from "../../GlobalStyle";

export const DashboardContainer = styled.div`
  width:                800px;
  display:              flex;
  flex-direction:       column;
  justify-content:      center;
  align-items:          center;
  margin:               0 auto;
  align-self:           flex-start;
  padding:              32px 16px;
`

export const DashboardHeader = styled.div`
  width:                100%;
  display:              flex;
  flex-wrap:            wrap;
  justify-content:      space-between;
  align-items:          center;
  font-family:          'Inter';
  gap:                  12px;
  border-top:           1px solid ${styles.colors.gray3};
  border-bottom:        1px solid ${styles.colors.gray3};
  padding:              44px 0;
  position:             relative;

  h2{
    color:              ${styles.colors.gray0};
    font-size:          18px;
    font-weight:        700;
    line-height:        28px;
  }

  span{
    color:              ${styles.colors.gray1};
    font-size:          12px;
    line-height:        22px;
    font-weight:        400;
  }
`

export const TechHeader = styled.div`
  width:                100%;
  display:              flex;
  justify-content:      space-between;
  align-items:          center;
  font-family:          'Inter';
  margin-top:           28px;

  h3{
    color:              ${styles.colors.gray0};
    font-weight:        600;
    font-size:          16px;
    line-height:        18px;
  }
`