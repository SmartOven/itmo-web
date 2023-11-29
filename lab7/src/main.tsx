import ReactDOM from 'react-dom/client'
import './styles/main.css'
import App from "./App.tsx";
import {store} from "./features/redux/store.ts";
import {Provider} from "react-redux";
// @ts-ignore Нет типизации - TS ругается
import { Lines } from "react-preloaders";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
        <Lines />
    </Provider>,
)