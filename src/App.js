import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

export default function App() {
    return (
        <div className="wrapper clear">
            <div style={{
                display: "none",
            }} className="overlay">
                <Drawer />
            </div>
            <Header />
            <div className="content p-40">
                <div className="d-flex align-center justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <img src="/images/svg/search.svg" alt="search input"/>
                        <input type="text" placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="sneakers d-flex flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}