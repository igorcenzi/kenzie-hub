import { StyledTech } from "./styledTech";

const TechCard = ({tech, setModalUpdate, setActualTech}) => {

  const handleClick = () => {
    setActualTech(tech)
    setModalUpdate(true)
  }

  return (
  <StyledTech onClick={() => handleClick()}>
    <span className="tech-title">{tech.title}</span>
    <span className="tech-level">{tech.status}</span>
  </StyledTech>
  )
}

export default TechCard