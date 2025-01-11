import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// const productArr = [
//     {productTitle: "Мужские Кроссовки Nike Air Max 270", priceProduct: "12 990 руб."},
//     {productTitle: "Мужские Кроссовки Nike Blazer Mid Suede", priceProduct: "10 500 руб."},
//     {productTitle: "Кроссовки Puma X Aka Boku Future Rider", priceProduct: "8 999 руб."},
//     {productTitle: "Кроссовки Puma X Aka Boku Future Rider", priceProduct: "8 999 руб."},
// ]

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
                    <Card
                        title="Мужские Кроссовки Nike Air Max 270"
                        price={14560}
                        imageURL="/images/jpg/nike-air-max.jpg"
                    />
                    <Card
                        title="Мужские Кроссовки Nike Air Max 270"
                        price={14560}
                        imageURL="/images/jpg/nike-air-max.jpg"
                    />
                </div>
            </div>
        </div>
    );
}