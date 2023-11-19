import React, {useEffect, useState} from "react";
import "../styles/MainPage.css"
import ThemeSwitcher from "../components/ThemeSwitcher.tsx";

const MainPage: React.FC = () => {
    const [chatsItems, setChatsItems] = useState<string[]>([])

    useEffect(() => {
        console.log("LOL console log");
        setChatsItems(["1", "2"])
    }, [])

    return (
        <div>
            <ThemeSwitcher/>
            <div>Main page text</div>
            <p>{chatsItems.length}</p>
        </div>
    )
}

export default MainPage;
