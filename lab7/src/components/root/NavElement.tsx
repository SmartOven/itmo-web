import React from "react";
import {useAppDispatch, useAppSelector} from "../../features/redux/hooks.ts";
import "../../styles/root/NavElement.css"
import {useNavigate} from "react-router-dom";
import {setActiveHref} from "../../features/redux/appSlice.ts";

interface NavElementProps {
    href: string;
    text: string;
}

const NavElement: React.FC<NavElementProps> = ({href, text}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const activePageHref = useAppSelector((state) => state.app.activePageHref);
    const className = activePageHref === href ? "nav-link active" : "nav-link not-active"

    const onClick = () => {
        dispatch(setActiveHref(href))
        navigate(href)
    }

    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

export default NavElement;
