import {BackgroundModal, ModalContainer, ModalHeader, ModalButtons} from './styledModalUpdate'
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../Input';
import Button from '../Button';
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as PATH from '../../Requests/env'
import axios from 'axios';
import {toast} from 'react-toastify'



const ModalUpdate = ({setModalUpdate, actualTech, handleFillList}) => {

  const config = {
    headers: {
     "Authorization": `Bearer ${localStorage.getItem('@kenzieHub')}`
    }
  }

  const formSchema = yup.object().shape({
    title: yup.string().required('Digite o nome da tecnologia'),
    status: yup.string().required('Selecione a tecnologia')
  })

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(formSchema)})

  const handleUpdate = (data) => { 
    if(data.status === "Selecione o nível"){
      toast.warning('Selecione um nível!', {position: toast.POSITION.TOP_CENTER})
    } else{
    axios
    .put(`${PATH.ENDPOINT_TECH}/${actualTech.id}`,data, config)
    .then(() => toast.success('Tecnologia alterada!', {position: toast.POSITION.TOP_CENTER}))
    .then(() => handleFillList())
    .catch((error) => toast.error('Erro ' + error, {position: toast.POSITION.TOP_CENTER}))
  }
}

  const handleDelete = () => {
    axios
    .delete(`${PATH.ENDPOINT_TECH}/${actualTech.id}`, config)
    .then(() => toast.success('Tecnologia deletada!', {position: toast.POSITION.TOP_CENTER}))
    .then(() => handleFillList())
    .catch((error) => toast.error('Erro ' + error, {position: toast.POSITION.TOP_CENTER}))
  }

  return (
  <BackgroundModal>
    <ModalContainer>
      <ModalHeader>
        <h2>Tecnologia Detalhes</h2>
        <AiOutlineClose color='#868E96' size={"20px"} onClick={() => setModalUpdate(false)}/>
      </ModalHeader>
      <form onSubmit={handleSubmit(handleUpdate)}>
      <Input label={"Nome do projeto"} placeholder={"Material UI"} value={actualTech.title} register={register} name={"title"}/>
      <Input label={"Status"} tech option value={actualTech.status} register={register} name={"status"}/>
      <ModalButtons className='modal-button-container'>
        <Button primary type="submit">Salvar alterações</Button>
        <Button secondary action={handleDelete}>Excluir</Button>
      </ModalButtons>
      </form>
    </ModalContainer>
  </BackgroundModal>
  )
}

export default ModalUpdate