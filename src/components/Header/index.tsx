import {
  HeaderContent,
  HeaderContiner,
  NewTransctionButton,
  NewTransferButton,
} from "./styles";

import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactioModal";
import { NewTransferModal } from "../NewTransfer";

export function Header() {
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
          
        </HeaderContent>
      </HeaderContiner>
    </div>
  );
}
