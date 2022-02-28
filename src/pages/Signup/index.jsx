import { Container } from "./styledSignup"
import Button from "../../components/Button"
import StyledLogin from "../Login/styledLogin"
import Input from "../../components/Input"
import { useForm } from "react-hook-form"
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import * as PATH from '../../Requests/env'
import axios from 'axios'
import Header from "../../components/Header"



const Signup = () => {
  const history = useHistory()

  const formSchema = yup.object().shape({
    name: yup.string().required('Insira seu nome'),
    email: yup.string().email('Email inválido').required('Insira seu email'),
    password: yup.string().required('Insira uma senha').matches(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, 'Senha precisa conter maiúscula, minúscula, número, caracter especial e no mínimo 8 caracteres'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Senhas não conferem').required('Confirme sua senha'),
    course_module: yup.string().required('Selecione um módulo')
  })

  const {register, handleSubmit, formState: {errors, dirtyFields}} = useForm({resolver: yupResolver(formSchema)})

  const handleBack = () => {
    history.push('/login')
  }


  const handleSignup = (data) => {
    if(data.course_module === 'Selecione um módulo'){
      toast.warning("Selecione um módulo!", {
        position: toast.POSITION.TOP_CENTER})     
    }else{
    delete data.confirmPassword
    data.bio = "empty"
    data.message = "empty"
    data.contact = "empty"
    axios
    .post(PATH.ENDPOINT_USERS, data)
    .then(() => toast.success("Usuário cadastrado com Sucesso!", {
      position: toast.POSITION.TOP_CENTER}))
    .then(() => handleBack())
    .catch(() => toast.error("Usuário já possui cadastro", {
      position: toast.POSITION.TOP_CENTER}))
  }
}
  return (
    <Container>
      <Header textButton={"Voltar"}/>
    <StyledLogin>
      <form className="form-container" onSubmit={handleSubmit(handleSignup)}>
        <h1>Crie sua conta</h1>
        <p className="login-newAccount" style={{fontWeight: '400'}}>Rapido e grátis, vamos nessa</p>
        <Input label={"Nome"} placeholder={"Digite aqui seu nome"} type={'text'} register={register} name={'name'} error={errors.name?.message}></Input>
        <Input label={"Email"} placeholder={"Digite aqui seu email"} type={'email'} register={register} name={'email'}></Input>
        <Input signup label={"Senha"} placeholder={"Digite aqui sua senha"} type={'password'} register={register} name={'password'} error={errors.password?.message}></Input>
        <Input signup label={"Confirmar senha"} placeholder={"Digite novamente sua senha"} type={'password'} register={register} name={'confirmPassword'} error={errors.confirmPassword?.message}></Input>
        <Input label={"Selecionar módulo"} option register={register} name={'course_module'} error={errors.module?.message}></Input>
        <Button primary type='submit' off={Object.keys(dirtyFields).length === 5 ? false : true}>Cadastrar</Button>
      </form>
    </StyledLogin>
    </Container>
  )
}

export default Signup