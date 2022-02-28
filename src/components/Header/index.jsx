import Button from "../Button"
import { useHistory } from "react-router-dom"
import Svg from '../../img/Logo.svg'
import { StyledHeader } from "./styledHeader"


const Header = ({textButton}) => {
  const history = useHistory()

  const handleBack = () => {
    localStorage.clear()
    history.push('/login')
  }

  return(
    <StyledHeader>
      <img src={Svg} alt="Logo KenzieHub"></img>
      <Button action={handleBack} text>{textButton}</Button>
    </StyledHeader>
  )
}

export default Header