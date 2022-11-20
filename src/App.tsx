

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TrasactionsProvider } from "./contexts/TransactionsContext";



import { GlobalStyle } from "./styles/global";
import {defaultTheme} from './styles/themes/defalut';
import { Router } from './lib/Router';


export function App() {
 
  return (
  
    
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TrasactionsProvider> 
        <Router/>
      </TrasactionsProvider>
    </ThemeProvider>
  
  )
}


