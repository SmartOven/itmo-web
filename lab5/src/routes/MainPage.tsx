import "../styles/MainPage.css"
import MainComponent from "../components/MainComponent.tsx";
import withHeaderAndFooter from "../components/withHeaderAndFooter.tsx";

const MainPage = withHeaderAndFooter(MainComponent);
export default MainPage;
