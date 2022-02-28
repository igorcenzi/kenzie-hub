import StyledInput from "./styledInput"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import {useState} from 'react'
import { styles } from "../../GlobalStyle";

const Input = ({placeholder, error, type, label, register, name, option, signup, tech, value}) => {

  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword(!showPassword)


  return(
    <StyledInput error={error ? true : false}>
      <p>{label}</p>
      <div>
        {option ? 
        <select {...register(name)} defaultValue={value ?? value}>
          {!tech ?
          <>
          <option>Selecione um módulo</option>
          <option>Primeiro Módulo</option>
          <option>Segundo Módulo</option>
          <option>Terceiro Módulo</option>
          <option>Quarto Módulo</option>
          <option>Quinto Módulo</option>
          <option>Sexto Módulo</option>
          </>
          :
          <>
          <option>Selecione o nível</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
          </>
          }
        </select>
      :
      <input {...register(name)} placeholder={placeholder} type={type === 'password' ? (showPassword ? 'text' : 'password') : type} value={value && value}></input>
    }
      {type === 'password' && !signup && 
      (showPassword 
        ?
        <FaRegEyeSlash color={styles.colors.gray1} onClick={() => handleShowPassword()}/> 
        : 
        <FaRegEye color={styles.colors.gray1} onClick={() => handleShowPassword()}/> )}

      {error && <span>{error}</span>}  
       </div>
         
    </StyledInput>
  )

}

export default Input