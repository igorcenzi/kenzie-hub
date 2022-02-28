import styled from "styled-components"

export const StyledHeader = styled.header`
  display:                   flex;
  justify-content:           space-between;
  align-items:               center;
  margin-bottom:             24px;
  width:                     100%;

  button{
    width:                   fit-content;
    padding:                 4px 24px;
  }

  img{
      width:                 105px;
    }

  @media (min-width: 600px){
    img{
      width:                 144px;
    }
  }
`