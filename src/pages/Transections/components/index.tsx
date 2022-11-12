import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./SearchForm/styled";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { TransactionsContext } from '../../../contexts/TransactionsContext';
import { useContextSelector } from "use-context-selector";

const searchFormScheama = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormScheama>

export function SearchForm() {
    const  fetchTransactions  = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions
    })

    const { 
        register, 
        handleSubmit, 
        formState: {isSubmitting}
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormScheama),
    })

    async function handleSearchTransctions(data: SearchFormInputs) {
        await fetchTransactions(data.query)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransctions)}>
            <input 
                type="text"  
                placeholder="Busque por transações"
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}