import Button from "../../components/Button/"
import Input from "../../components/Input"
import StyledLogin from './styledLogin'
import imagem from '../../img/Logo.svg'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as PATH from '../../Requests/env'
import { toast } from "react-toastify"
import { useHistory, Redirect } from "react-router-dom/"
import { Container } from "../Signup/styledSignup"


const Login = () => {

  const history = useHistory()

  const formSchema = yup.object().shape({
    email:      yup.string().required("Campo obrigatório").email("Email inválido"),
    password:   yup.string().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(formSchema)})

  const handleRedirect = () => {
    history.push('/signup')
  }

  const handleLogin = (data) => {
    axios
    .post(PATH.ENDPOINT_LOGIN, data)
    .then(resp => {
      console.log(resp.data)
      localStorage.setItem('@kenzieHub', resp.data.token)
      localStorage.setItem('@kenzieHubId', resp.data.user.id)
    })
    .then(() => toast.success("Logado com sucesso", {position: toast.POSITION.TOP_CENTER}))
    .then(() => history.push('/user/dashboard'))
    .catch(() =>toast.error("Usuário ou senha inválido", {
      position: toast.POSITION.TOP_CENTER}))
  }
 
    if(localStorage.getItem('@kenzieHub')){
     return <Redirect to={'/user/dashboard'}/>
     }

  return (
    <Container>
      <StyledLogin>
        <img src={imagem} alt='Logo Kenzie Hub'></img>
        <form className={"form-container"} onSubmit={handleSubmit(handleLogin)}>
          <h1>Login</h1>
          <Input register={register} name='email' error={errors.email?.message}label={'Email'} type={'email'} placeholder={"email@email.com"}/>
          <Input register={register} name='password' error={errors.password?.message} label={'Senha'} type={'password'} placeholder={"Password"}/>
          <Button type="submit" primary >Entrar</Button>
          <p className="login-newAccount">Ainda não possui uma conta?</p>
          <Button type='button' action={handleRedirect} secondary>Cadastre-se</Button>
        </form>   
      </StyledLogin>
    </Container>
  )
}

export default Login