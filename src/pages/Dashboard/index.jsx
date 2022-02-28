import { useState, useEffect } from "react"
import { DashboardContainer, DashboardHeader,TechHeader } from "./styledDashboard"
import Header from "../../components/Header"
import Button from "../../components/Button"
import { IoMdAdd } from 'react-icons/io';
import DashboardTechs from "../../components/DashboardTechs"
import axios from 'axios'
import * as PATH from '../../Requests/env'
import ModalUpdate from "../../components/ModalUpdate"
import ModalNewTech from "../../components/ModalNewTech"

const Dashboard = () => {

  const [techList, setTechList] = useState([])
  const [user, setUser] = useState({})
  const [modalUpdate, setModalUpdate] = useState(false)
  const [modalNewTech, setModalNewTech] = useState(false)
  const [actualTech, setActualTech] = useState({})
 
  const handleFillList = () => {
    if(localStorage.getItem('@kenzieHubId')){
      axios
      .get(`${PATH.ENDPOINT_USERS}/${localStorage.getItem('@kenzieHubId')}`)
      .then((resp) => {
        setTechList(resp.data.techs)
        setUser(resp.data)
      })
  }}

  useEffect(() => {
    handleFillList()
    },[])
  
  return(
    <>
    {modalUpdate && <ModalUpdate setModalUpdate={setModalUpdate} actualTech={actualTech} handleFillList={handleFillList}/>}
    {modalNewTech && <ModalNewTech setModalNewTech={setModalNewTech} actualTech={actualTech} handleFillList={handleFillList}/>}
    <DashboardContainer>
      <Header textButton={"Sair"}></Header>
    <DashboardHeader>
      <h2>{user.name}</h2>
      <span>{user.course_module}</span>
    </DashboardHeader>
    <TechHeader>
      <h3>Tecnologias</h3>
      <Button text action={() => setModalNewTech(true)}><IoMdAdd size={"16px"}/></Button>
    </TechHeader>
    <DashboardTechs techList={techList} setModalUpdate={setModalUpdate} setActualTech={setActualTech}/>
    </DashboardContainer>
    </>
  )
}

export default Dashboard