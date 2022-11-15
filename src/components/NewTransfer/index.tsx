import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import * as z  from "zod";

import { CloseButton, Content, Overlay, TransferType, TransferTypeButton } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod';

import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useContextSelector } from "use-context-selector";



const newTransferFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransferFormInputs = z.infer<typeof newTransferFormSchema>;

export function NewTransferModal() {
  const  createTransfer  = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction;  
  },)

  const { 
    control,
    register, 
    handleSubmit,
    reset, 
  } = useForm<NewTransferFormInputs>({
    resolver: zodResolver(newTransferFormSchema),
    defaultValues: {
      type: 'income'
    }
  })

 async function handleCreateNewTransfer(data: NewTransferFormInputs){
  const { description, price, category, type } = data;

    await createTransfer({
      description, 
      price, 
      category, 
      type
    })

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Transferência</Dialog.Title>
        <CloseButton>
            <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransfer)}>
            <input 
            type="text" 
            placeholder="Descrição" 
            required 
            {...register('description')}
            />
            <input 
            type="number" 
            placeholder="valor" 
            required 
            {...register('price', {valueAsNumber: true})}
            />
          <input 
            type="text" 
            placeholder="Categoria" 
            required 
            {...register('category')}
            />  

          <Controller 
            control={control}
            name="type"
            render={({ field }) => {
              return(
                <TransferType onValueChange={field.onChange} value={field.value}>
              
                <TransferTypeButton variant="outcome" value="outcome">
                  <button type="submit">Transferir</button>  
                
                </TransferTypeButton>
                </TransferType>
              )
            }}
          />

        </form>
      </Content>
    </Dialog.Portal>
  );
}
