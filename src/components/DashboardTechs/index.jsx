import TechCard from "../TechCard";
import {StyledDashboardTechs} from './styledDashboardTechs'

const DashboardTechs = ({techList, setModalUpdate, setActualTech}) => {
  return (
    <StyledDashboardTechs>
      {techList.map((tech) => <TechCard tech={tech} key={tech.id} setModalUpdate={setModalUpdate} setActualTech={setActualTech}/>)}
    </StyledDashboardTechs>
  )
}

export default DashboardTechs