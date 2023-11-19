import React from "react";
import './styles/App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import MainPage from "./routes/MainPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>,
        // children: [
        //     {
        //         path: ":chatId",
        //         element: <ChatContent/>,
        //         loader: chatContentLoader,
        //     },
        // ],
    },
]);

const App: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default App
