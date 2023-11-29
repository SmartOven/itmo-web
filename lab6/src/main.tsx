import ReactDOM from 'react-dom/client'
import './styles/main.css'
import App from "./App.tsx";
import {store} from "./features/redux/store.ts";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>,
)
