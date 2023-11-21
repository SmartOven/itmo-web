import React from "react";
import './styles/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import MainPage from "./routes/MainPage.tsx";
import ContactsPage from "./routes/ContactsPage.tsx";
import TableConstructorPage from "./routes/TableConstructorPage.tsx";
import ProductPageSkeleton from "./components/ProductPageSkeleton.tsx";
import ProductComponent from "./components/ProductComponent.tsx";
import {productDataLoader} from "./features/loaders.ts";

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
        path: "/product",
        element: <ProductPageSkeleton/>,
        children: [
            {
                path: ":productId",
                element: <ProductComponent/>,
                loader: productDataLoader,
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
