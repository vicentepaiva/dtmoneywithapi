import { ThemeProvider } from "styled-components";
import { TrasactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transections";
import { GlobalStyle } from "./styles/global";
import {defaultTheme} from './styles/themes/defalut';


export function App() {
 

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>

      <TrasactionsProvider>
        <Transactions/>
      </TrasactionsProvider>
    </ThemeProvider>
  )
}


