import { useContext } from "react";
import {
  ButtonLogout,
  HeaderContent,
  HeaderContiner,
  NewTransctionButton,
  NewTransferButton,
} from "./styles";

import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactioModal";
import { NewTransferModal } from "../NewTransfer";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from 'react-router-dom';





export function Header() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate();

  async function handleLogout() {
    await auth.signOut();
    navigate('/?');
  }

  
  return (
    <div>
      <HeaderContiner>
        <HeaderContent>
          <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransctionButton>Nova transação</NewTransctionButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransferButton>Transferência</NewTransferButton>
            </Dialog.Trigger>
            <NewTransferModal />
          </Dialog.Root>


         <ButtonLogout onClick={handleLogout}>
              clique aqui para sair.
          </ButtonLogout>  
        </HeaderContent>
      </HeaderContiner>
    </div>
  );
}
