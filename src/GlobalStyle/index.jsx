import { createGlobalStyle } from 'styled-components'

export const styles = {
  colors:{
    "colorPrimary":           "#FF577F",
    "colorPrimaryFocus":      "#FF427F",
    "colorPrimaryNegative":   "#59323F",
    "gray4":                  "#121214",
    "gray3":                  "#212529",
    "gray2":                  "#343B41",
    "gray1":                  "#868E96",
    "gray0":                  "#F8F9FA",
    "white":                  "#FFFFFF",
    "colorSuccess":           "#3FE864",
    "colorNegative":          "#E83F5B"
  },
  "borderRadius":             "4px",

  "boxShadowDesktop":         "0px 4px 40px -10px rgba(0, 0, 0, 0.25)",
  "boxShadowMobile":          "0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25)",

  "transition":               "0.3s"
}

export const GlobalStyle = createGlobalStyle`
   *{
    margin:                    0;
    padding:                   0;
    box-sizing:                border-box;
    font-family:               'Inter', sans-serif;
    font-weight:               400;
    list-style:                none;
    text-decoration:           none;
  }

  #root{
    margin:                    0;
    padding:                   0;
    box-sizing:                border-box;
    width:                     100%;
    height:                    100%;
    display:                   flex;
    align-items:               center;
  }

  body, html{
    background-color:          #121214;
    padding:                   12px;
    max-width:                 100vw;
    height:                    100vh;
    box-sizing:                border-box;
    margin:                    0;
    padding:                   0;
  }
`