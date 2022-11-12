import {  ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface Transaction {
    total: ReactNode;
    outcome: ReactNode;
    income: ReactNode;
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string,
  }

  interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
  }

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>; 
    createTransaction: (data: CreateTransactionInput) => Promise<void>;      
}

interface TrasactionsProviderProps {
    children: ReactNode;
}


export const TransactionsContext = createContext({} as TransactionContextType);

export function TrasactionsProvider({children}: TrasactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(
    async ( query?: string ) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        }
      })
  
      setTransactions(response.data);
    }, [])



  const createTransaction = useCallback(async (data: CreateTransactionInput) => {
    const { description, price, category, type } = data;

    const response = await api.post('/transactions', {
      description, 
      price, 
      category, 
      type,
      createdAt: new Date(), 
    })

    setTransactions(state => [...state, response.data]);
  }, [])

  useEffect(() => { 
    fetchTransactions();
    }, [])

    return(
        <TransactionsContext.Provider value={{
          transactions,
          fetchTransactions,
          createTransaction,
          }}>
            {children}
        </TransactionsContext.Provider>
    ); 
}