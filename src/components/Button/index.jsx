import {StyledButtonPrimary, StyledButtonSecondary, StyledButtonText} from "./styledButton";

const Button = ({children, primary, secondary, text, off, action}) => {
  return(
    <>
    {primary &&
    <StyledButtonPrimary disabled={off ? true : false}> {children}</StyledButtonPrimary>}
    {secondary &&
    <StyledButtonSecondary type='button' onClick={() => action()}>{children}</StyledButtonSecondary>}
    {text && 
    <StyledButtonText onClick={() => action()}>{children}</StyledButtonText>}
    </>
  )
}

export default Button