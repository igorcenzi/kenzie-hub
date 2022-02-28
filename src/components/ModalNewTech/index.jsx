import {BackgroundModal, ModalContainer, ModalHeader, ModalButtons} from '../ModalUpdate/styledModalUpdate'
import { AiOutlineClose } from 'react-icons/ai';
import Input from '../Input';
import Button from '../Button';
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as PATH from '../../Requests/env'
import axios from 'axios';
import {toast} from 'react-toastify'



const ModalNewTech = ({setModalNewTech, handleFillList}) => {

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

const handleRegisterTech = (data) => {
  if(data.status === 'Selecione o nível'){
    toast.warning("Selecione o nível!", {position: toast.POSITION.TOP_CENTER})
  }else{
    axios.post(PATH.ENDPOINT_TECH, data, config)
    .then(() => toast.success("Tecnologia cadastrada com sucesso!", {position: toast.POSITION.TOP_CENTER}))
    .then(() => handleFillList())
    .catch(() => toast.error("Tecnologia já cadastrada!", {position: toast.POSITION.TOP_CENTER}))
  }
}

  return (
  <BackgroundModal>
    <ModalContainer>
      <ModalHeader>
        <h2>Cadastrar Tecnologia</h2>
        <AiOutlineClose color='#868E96' size={"20px"} onClick={() => setModalNewTech(false)}/>
      </ModalHeader>
      <form onSubmit={handleSubmit(handleRegisterTech)}>
      <Input label={"Nome do projeto"} placeholder={"Material UI"} register={register} name={"title"} error={errors.title?.message}/>
      <Input label={"Status"} tech option register={register} name={"status"}/>
      <ModalButtons className='modal-button-container'>
        <Button primary type="submit">Salvar alterações</Button>
      </ModalButtons>
      </form>
    </ModalContainer>
  </BackgroundModal>
  )
}

export default ModalNewTech