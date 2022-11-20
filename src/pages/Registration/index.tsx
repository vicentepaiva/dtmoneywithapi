import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content } from "./styles";

export function Registration() {


    function handleSubmit() {

    }


  return (
    <Dialog.Portal>
      <Dialog.Overlay />

      <Content>
        <Dialog.Title>Login</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" />
            <input type="number" placeholder="Senha"/>
            <button>Registrara</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}