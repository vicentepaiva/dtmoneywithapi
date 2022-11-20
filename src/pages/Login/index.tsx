import { useState, ChangeEvent, useContext, FormEvent } from 'react';
//import * as Dialog from "@radix-ui/react-dialog";
//import { X } from "phosphor-react";

import { Button, Content, Overlay } from "./styles";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from 'react-router-dom';


export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  
  // function handlePasswordInput(event: ChangeEvent<HTMLInputElement>) {
  //   setPassword(event?.target.value)
  // }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(email && password) {
      const isLogged = await auth.signIn(email, password)
        if(isLogged) {
          navigate('/transactions')
        } else {
          alert("Não deu certo")
        }
    }
  }

  return (
    <Overlay>
      <Content>
        <form>
            <input 
            type="text" 
            placeholder="Digite seu email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input 
            type="passowrd" 
            placeholder="Digite sua senha" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            //onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit}>Login</Button>
        </form>
      </Content>
    </Overlay>
  );
}
