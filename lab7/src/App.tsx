import React from "react";
import './styles/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainComponentError from "./components/MainComponentError.tsx";
import MainPage from "./routes/MainPage.tsx";
import ContactsPage from "./routes/ContactsPage.tsx";
import TableConstructorPage from "./routes/TableConstructorPage.tsx";
import ProductComponent from "./components/ProductComponent.tsx";
import {mainPageLoader, productPageLoader} from "./features/loaders.ts";
import ProductPage from "./routes/ProductPage.tsx";
import ProductComponentError from "./components/ProductComponentError.tsx";
import {createReviewAction} from "./features/actions.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        loader: mainPageLoader,
        errorElement: <MainComponentError/>,
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
                action: createReviewAction,
                errorElement: <ProductComponentError/>
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
