import React from "react";
import './styles/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import MainPage from "./routes/MainPage.tsx";
import ContactsPage from "./routes/ContactsPage.tsx";
import TableConstructorPage from "./routes/TableConstructorPage.tsx";
import ProductComponent from "./components/ProductComponent.tsx";
import {productPageLoader} from "./features/loaders.ts";
import ProductPage from "./routes/ProductPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/contacts",
        element: <ContactsPage/>,
    },
    {
        path: "/table-constructor",
        element: <TableConstructorPage/>,
    },
    {
        path: "/products",
        element: <ProductPage/>,
        children: [
            {
                path: ":productId",
                element: <ProductComponent/>,
                loader: productPageLoader,
            },
        ],
    },
]);

const App: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default App
