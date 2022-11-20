import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Login} from "../pages/Login";
import {Transactions} from "../pages/Transactions";




export function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route element={<Login/>} path="/"  />
            <Route element={<Transactions />} path="/transactions"/>
            </Routes>
        </BrowserRouter>
    );
}