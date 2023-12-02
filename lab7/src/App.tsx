import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DefaultErrorPage from "./components/main/MainComponentError.tsx";
import ProductComponent from "./components/product/ProductComponent.tsx";
import {mainPageLoader, productPageLoader} from "./features/loaders.ts";
import ProductPage from "./components/product/ProductPage.tsx";
import ProductComponentError from "./components/product/ProductComponentError.tsx";
import RootLayout from "./components/root/RootLayout.tsx";
import MainComponent from "./components/main/MainComponent.tsx";
import Contacts from "./components/contacts/Contacts.tsx";
import TableConstructor from "./components/table/TableConstructor.tsx";
import TestComponent from "./components/TestComponent.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <MainComponent/>,
                loader: mainPageLoader,
                errorElement: <DefaultErrorPage/>,
            },
            {
                path: "/contacts",
                element: <Contacts/>,
            },
            {
                path: "/table-constructor",
                element: <TableConstructor/>,
            },
            {
                path: "/products",
                element: <ProductPage/>,
                children: [
                    {
                        path: ":productId",
                        element: <ProductComponent/>,
                        loader: productPageLoader,
                        errorElement: <ProductComponentError/>
                    },
                ],
            },
            {
                path: "/test",
                element: <TestComponent/>,
                errorElement: <DefaultErrorPage/>
            }
        ]
    },
]);


const App: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default App
