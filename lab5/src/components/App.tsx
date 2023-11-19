import React from "react";
import '../styles/App.css'
import {useAppSelector} from "../features/redux/hooks.ts";
import {ThemeProvider} from "@gravity-ui/uikit";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "../ErrorPage.tsx";
import MainPage from "../routes/MainPage.tsx";

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
    const theme = useAppSelector((state) => state.theme.theme);
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App
