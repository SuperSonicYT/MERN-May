import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App.jsx";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./Expenses.js";
import Invoices from "./Invoices.js";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
            }
            />
        </Route>
    </Routes>
</BrowserRouter>);
